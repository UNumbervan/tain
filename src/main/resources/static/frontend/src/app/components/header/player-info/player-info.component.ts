import {Component} from '@angular/core';
import {PlayerInfo} from "../../../data/player-info";
import {Store} from "@ngrx/store";
import {PlayerInfoService} from "../../../services/player-info.service";
import {State} from "../../../state/State";

@Component({
  selector: 'player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {
  public playerInfo: PlayerInfo = null;

  constructor(private store: Store<State>,
              private playerInfoService: PlayerInfoService) {

    this.playerInfoService.loadPlayerInfo();
  }

  ngOnInit() {
    const self = this;
    this.store.select('playerInfo')
      .subscribe((playerInfo: PlayerInfo) => {
        self.playerInfo = playerInfo;
      });
  }
}

