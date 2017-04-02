import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Store} from "@ngrx/store";
import {Config} from "../data/config";
import {CONFIG_LOADED} from "../state/actions/config";
import {State} from "../state/State";
import 'rxjs/add/operator/map';

@Injectable()
export class AppConfigService {
  private readonly configUrl = '/api/config';

  constructor(private http: Http,
              private store: Store<State>) {
  }

  loadConfig() {
    this.http.get(this.configUrl)
      .map((response: Response) => (response.json() as Config))
      .subscribe((payload) => this.store.dispatch({
        type: CONFIG_LOADED,
        payload
      }));
  }
}
