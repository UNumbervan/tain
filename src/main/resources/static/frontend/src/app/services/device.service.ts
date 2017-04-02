import {Injectable} from '@angular/core';
import {DevicesEnum} from "../data/devices.enum";

@Injectable()
export class DeviceService {
  private device: DevicesEnum = null;

  getDevice(): DevicesEnum {
    return this.device
      || (this.device = this.detectDevice());
  }

  private detectDevice(): DevicesEnum {
    var isMobile = window.matchMedia(`screen and (max-width: 499px)`);

    return isMobile.matches
      ? DevicesEnum.mobile
      : DevicesEnum.desktop;
  }
}
