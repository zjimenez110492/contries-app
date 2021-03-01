import { CountryComponent } from './../country/country.component';
import { CountryService } from './../../services/country.service';
import { Country } from './../../../../models/country.model';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit{

  wrapperVariant = 'blue';
  countries:Country[];
  constructor(private themeService: ThemeService, private  countryService:CountryService,  private dialog: MatDialog) {}
  ngOnInit(): void {
    this.countries=[]
    const active = this.themeService.getActiveTheme() ;
    this.countryService.getAllCountries().subscribe(c=>{
     c.forEach(c => {
       this.countries.push(c);
     });
    }
    );
  }

  view(c: Country) {
    const dialogRef = this.dialog.open(CountryComponent, {
      width: '400px',
      height: '500px',
      data: {}
    });
    dialogRef.componentInstance.country=c;
    dialogRef.afterClosed().subscribe(result => {/*
      console.log(`Dialog result: ${result}`); */
    });
  }
  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

}
