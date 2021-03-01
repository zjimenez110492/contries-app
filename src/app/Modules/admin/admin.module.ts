import { ListCountriesComponent } from './components/list-countries/list-countries.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './components/country/country.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [ListCountriesComponent, CountryComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule
  ]
})
export class AdminModule { }

