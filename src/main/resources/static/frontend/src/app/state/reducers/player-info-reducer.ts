import {Action} from "@ngrx/store";
import {PLAYER_INFO_LOADED} from "../actions/player-info";
import {PlayerInfo} from "../../data/player-info";

export function playerInfoReducer(state: PlayerInfo = null, action: Action): PlayerInfo {
  switch (action.type) {
    case PLAYER_INFO_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
