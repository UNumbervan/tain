import {Component, HostBinding} from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "../../data/category";
import {Config} from "../../data/config";
import {Store} from "@ngrx/store";
import {State} from "../../state/State";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {DeviceService} from "../../services/device.service";
import {DevicesEnum} from "../../data/devices.enum";

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  public categories: Observable<Category[]>;

  @HostBinding('class.hidden')
  private categoriesHidden: boolean = false;

  constructor(private store: Store<State>,
              private deviceService: DeviceService) {
  }

  ngOnInit() {
    const self = this;
    this.categories = this.store.select('config')
      .filter((config: Config) => config !== null)
      .map((config: Config) => config.lobbyCategories);

    this.store.select('categoriesVisible')
      .subscribe((visible: boolean) => {
        self.categoriesHidden = !visible
          && this.deviceService.getDevice() === DevicesEnum.mobile;
      });
  }
}
