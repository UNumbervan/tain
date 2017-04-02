import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {GamesComponent} from './components/games/games.component';
import {GameComponent} from './components/games/game/game.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryComponent} from './components/categories/category/category.component';
import {HeaderComponent} from './components/header/header.component';
import {PlayerInfoComponent} from './components/header/player-info/player-info.component';
import {StoreModule} from "@ngrx/store";

import {configReducer} from './state/reducers/config-reducer';
import {gamesReducer} from './state/reducers/games-reducer';
import {playerInfoReducer} from './state/reducers/player-info-reducer';
import {categoryReducer} from './state/reducers/category-reducer';
import {categoriesReducer} from './state/reducers/categories-reducer';

import {AppConfigService} from "./services/app-config.service";
import {DeviceService} from "./services/device.service";
import {GamesService} from "./services/games.service";
import {PlayerInfoService} from "./services/player-info.service";

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    CategoriesComponent,
    CategoryComponent,
    HeaderComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      category: categoryReducer,
      categoriesVisible: categoriesReducer,
      config: configReducer,
      games: gamesReducer,
      playerInfo: playerInfoReducer
    })
  ],
  providers: [
    AppConfigService,
    DeviceService,
    GamesService,
    PlayerInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
