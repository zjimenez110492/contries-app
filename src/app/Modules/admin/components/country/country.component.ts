import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Country } from 'src/app/models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country:Country;
  constructor(private  countryService:CountryService, public dialogRef: MatDialogRef<CountryComponent>) { }

  ngOnInit(): void {
    console.log("PAIS DESDE VER:   ",this.country)
  }
  countryCode(border:string){
    this.countryService.getCountryCode(border).subscribe(result=>{
      console.log("Pais descargado:   ",result);
    this.country=result;
    });
  }
  back(){
    this.dialogRef.close();
  }
}
