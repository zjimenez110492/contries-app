import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { ColorSchemeService } from './theme/color-scheme.service';
import { ThemeService } from './theme/theme.service';
interface AppState{
  dark:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries-app';
  wrapperVariant = 'blue';
  dark:boolean;
  constructor(private themeService: ThemeService, private colorSchemeService: ColorSchemeService, private store: Store<AppState>) {
    this.colorSchemeService.load();
    this.dark=false;
  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    const accion:Action={
      type:'CHANGE',
    };
    this.store.dispatch(accion);
      this.dark=!this.dark;
  }

}
