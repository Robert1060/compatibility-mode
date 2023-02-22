import { Component, Input } from '@angular/core';

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
  population: number
  isLoading = true
  @Input()
  flag: string
  @Input()
  countryName: string
  constructor() {
    if(localStorage.length == 2) {
      this.country = localStorage.getItem('country')!
      this.getCountryInfo(this.country)
    }
  }
  async getCountryInfo(country: string) {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await response.json()
    data.forEach((i:any) => {
      this.currencySymbol = i.currencies[Object.keys(i.currencies)[0]].symbol
      this.currencyName = i.currencies[Object.keys(i.currencies)[0]].name
      // converted to milions
      this.population = Number(Math.abs(Number(i.population) / 1.0e+6).toFixed(2))
    })
    this.countryInfo = data
    this.isLoading = false
  }
}
