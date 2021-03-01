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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card'
//Ngrx

import {StoreModule} from '@ngrx/store'
import { darkMode } from './dark-mode.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MatCardModule,
    MatDialogModule,
AdminRoutes,
NgbModule,
StoreModule.forRoot({dark: darkMode})
,


ThemeModule.forRoot({
  themes: [lightTheme, darkTheme],
  active: 'light'
}),
BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
