import { AdminRoutes } from './Modules/admin/admin.routing';

import { AdminModule } from './Modules/admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
AdminRoutes,
NgbModule,
ThemeModule.forRoot({
  themes: [lightTheme, darkTheme],
  active: 'light'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
