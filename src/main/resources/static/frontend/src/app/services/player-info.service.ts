import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Store} from "@ngrx/store";
import {PLAYER_INFO_LOADED} from "../state/actions/player-info";
import {PlayerInfo} from "../data/player-info";
import {State} from "../state/State";
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerInfoService {
  private readonly playerInfoUrl = '/api/player/info';

  constructor(private http: Http,
              private store: Store<State>) {
  }

  loadPlayerInfo() {
    this.http.get(this.playerInfoUrl)
      .map((response) => (response.json() as PlayerInfo))
      .subscribe((payload: PlayerInfo) => this.store.dispatch({
        type: PLAYER_INFO_LOADED,
        payload
      }));
  }
}
