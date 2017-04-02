import {Component} from '@angular/core';
import {Config} from "../../data/config";
import {Store} from "@ngrx/store";
import {State} from "../../state/State";
import {Observable} from "rxjs";
import interpolate from 'interpolate';
import {CATEGORIES_VISIBILITY_TOGGLE} from "../../state/actions/category";

@Component({
  selector: 'tain-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public icon: Observable<String> = Observable.from('');

  constructor(private store: Store<State>) {
    this.icon = store.select('config')
      .filter((config: Config) => config !== null)
      .map((config: Config) => interpolate(config.logoUrlTemplate, {config}));
  }

  onSandwitchButtonClick() {
    this.store.dispatch({
      type: CATEGORIES_VISIBILITY_TOGGLE
    });
  }
}
