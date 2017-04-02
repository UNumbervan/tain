import {State, Action} from "@ngrx/store";
import {Config} from "../../data/config";
import {CONFIG_LOADED} from "../actions/config";

export function configReducer(state: Config = null, action: Action): Config {
  switch (action.type) {
    case CONFIG_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
