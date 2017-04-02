import {Action} from "@ngrx/store";
import {CATEGORIES_VISIBILITY_TOGGLE} from "../actions/category";

export function categoriesReducer(state: boolean = false, action: Action): boolean {
  switch (action.type) {
    case CATEGORIES_VISIBILITY_TOGGLE: {
      return !state;
    }
    default: {
      return state;
    }
  }
}
