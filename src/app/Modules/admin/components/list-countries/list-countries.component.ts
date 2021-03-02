import { CountryComponent } from './../country/country.component';
import { CountryService } from './../../services/country.service';
import { Country } from './../../../../models/country.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit{
  regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selected = 'option2';
  wrapperVariant = 'blue';
  countries: Country[];
  selectRegion: FormGroup;

  constructor(private themeService: ThemeService, private  countryService: CountryService,  private dialog: MatDialog,
              private formBuilder: FormBuilder)
    {

    }

    ngOnInit(): void {
      this.selectRegion = this.formBuilder.group({
        region: [null, ],
        search:['']
      });
      this.selectRegion.get('search').valueChanges.subscribe(
        value => {
            this.countries=[];
            console.log('Buscando:',value);
            if(value!=''){
              this.countryService.getSearchCountryName(value).subscribe(result=>{
                result.forEach((country: Country) => {
                  this.countries.push(country);
                });
              })
            }
            else{
              this.countryService.getAllCountries().subscribe(c => {
                c.forEach( (c: Country) => {
                  this.countries.push(c);
                });
               }
               );
            }
        });
      this.selectRegion.get('region').valueChanges.subscribe(
        value => {
          this.countries=[];
          if(value!=null){
            this.countryService.getCountriesByRegion(value).subscribe(
              (result)=>{
               result.forEach((country: Country) => {
                 console.log("PAIS DE ",value,':   ',country);
                this.countries.push(country);
               });

              }
            )
          }
          else{
            this.countryService.getAllCountries().subscribe(c => {
              c.forEach( (c: Country) => {
                this.countries.push(c);
              });
             }
             );
          }

        }
      );
      this.countries = [];
      const active = this.themeService.getActiveTheme() ;
      this.countryService.getAllCountries().subscribe(c => {
     c.forEach( (c: Country) => {
       this.countries.push(c);
     });
    }
    );
  }

  view(c: Country): void {
    const dialogRef = this.dialog.open(CountryComponent, {
      width: '400px',
      height: '500px',
      data: {}
    });
    dialogRef.componentInstance.country = c;
    dialogRef.afterClosed().subscribe(result => {/*
      console.log(`Dialog result: ${result}`); */
    });
  }
  toggle(): void {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }

}
