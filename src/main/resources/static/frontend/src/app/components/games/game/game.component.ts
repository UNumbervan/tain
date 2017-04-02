import {Component, OnInit, Input, HostBinding, HostListener} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../state/State";
import {Config} from "../../../data/config";
import interpolate from 'interpolate';
import {DomSanitizer, SafeUrl, SafeStyle} from "@angular/platform-browser";

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input() game;
  @HostBinding('style.background-image') public iconUrl: SafeStyle;
  public launchUrl: string;

  constructor(private store: Store<State>,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const self = this;
    this.store.select('config')
      .filter((config: Config) => config !== null)
      .subscribe((config: Config) => {
        self.iconUrl = this.sanitizer.bypassSecurityTrustStyle(
          'url(' + interpolate(config.gameIconsUrlTemplate, {game: this.game}) + ')'
        );

        self.launchUrl = interpolate(config.gameLaunchUrlTemplate, {game: this.game});
      });
  }

  @HostListener('click')
  onClick() {
    window.location.href = this.launchUrl;
  }
}
