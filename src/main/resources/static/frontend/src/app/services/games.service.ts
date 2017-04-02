import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {DevicesEnum} from "../data/devices.enum";
import {Game} from "../data/game";
import {Store} from "@ngrx/store";
import {GAMES_LOADED} from "../state/actions/games";
import {State} from "../state/State";
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {
  constructor(private http: Http,
              private store: Store<State>) {
  }

  loadGames(device: DevicesEnum, category: String) {
    this.http.get(this.getGamesUrl(device, category))
      .map((response: Response) => (response.json() as Game[]))
      .subscribe((payload) => this.store.dispatch({
        type: GAMES_LOADED,
        payload
      }));
  }

  private getGamesUrl(device: DevicesEnum, category: String) {
    return `/api/lobby/games/${DevicesEnum[device]}/${category}`;
  };
}
