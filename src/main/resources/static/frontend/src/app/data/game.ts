import {DevicesEnum} from "./devices.enum";

export class Game {
  id: number;
  lobbyName: String;
  devices: DevicesEnum[];
  categories: String[];
}
