import {Component} from '@angular/core';
import {Game} from "../../data/game";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {GamesService} from "../../services/games.service";
import {State} from "../../state/State";
import {DeviceService} from "../../services/device.service";
import {Category} from "../../data/category";

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  public games: Observable<Game[]>;

  constructor(private store: Store<State>,
              private gamesService: GamesService,
              private deviceService: DeviceService) {
    this.games = store.select('games');

    store.select('category').subscribe((category: Category) => {
      if (category) {
        gamesService.loadGames(deviceService.getDevice(), category.id);
      }
    });
  }
}
