import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { THEMES, ACTIVE_THEME, Theme } from './symbols';
interface AppState{
  dark:boolean
}
@Injectable()
export class ThemeService {

  themeChange = new EventEmitter<Theme>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string,
    private store: Store<AppState>
  ) {
    this.store.subscribe(state=>{
      if(state.dark)
        this.setTheme('dark');
        else
          this.setTheme('light');
    });
  }

  getActiveTheme() {
    const theme = this.themes.find(t => t.name === this.theme);
    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    return theme;
  }

  setTheme(name: string) {
    this.theme = name;
    this.themeChange.emit( this.getActiveTheme());
  }

}
