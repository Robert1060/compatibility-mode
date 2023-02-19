import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  country: string
  countryInfo: any
  currencySymbol: string
  currencyName: string
  @Input()
  flag: string
  @Input()
  countryName: string
  constructor() {
    if(localStorage.length > 1) {
      this.country = localStorage.getItem('country')!
      this.getCountryInfo(this.country)
    }
  }
  async getCountryInfo(country: string) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await response.json()
    data.forEach((i:any) => {
      // debugger
      this.currencySymbol = i.currencies[Object.keys(i.currencies)[0]].symbol
      this.currencyName = i.currencies[Object.keys(i.currencies)[0]].name

    })
    // debugger
    this.countryInfo = data
  }



}
