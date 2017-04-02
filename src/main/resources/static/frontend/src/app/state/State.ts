import {Category} from "../data/category";
import {Game} from "../data/game";
import {Config} from "../data/config";
import {PlayerInfo} from "../data/player-info";

export interface State {
  categoriesVisible: boolean;
  category: Category;
  games: Game[];
  config: Config;
  playerInfo: PlayerInfo;
}
