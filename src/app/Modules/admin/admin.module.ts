import { ListCountriesComponent } from './components/list-countries/list-countries.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListCountriesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class AdminModule { }
