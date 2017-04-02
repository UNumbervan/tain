import {Action} from "@ngrx/store";
import {Game} from "../../data/game";
import {GAMES_LOADED} from "../actions/games";

export function gamesReducer(state: Game[] = [], action: Action): Game[] {
  switch (action.type) {
    case GAMES_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
