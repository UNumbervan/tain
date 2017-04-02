import {Action} from "@ngrx/store";
import {CATEGORY_CHANGED} from "../actions/category";
import {Category} from "../../data/category";
import {CONFIG_LOADED} from "../actions/config";
import {Config} from "../../data/config";

export function categoryReducer(state: Category = null, action: Action): Category {
  switch (action.type) {
    case CATEGORY_CHANGED: {
      return action.payload;
    }
    case CONFIG_LOADED: {
      return (action.payload as Config).lobbyCategories[0];
    }
    default: {
      return state;
    }
  }
}
