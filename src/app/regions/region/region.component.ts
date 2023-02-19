import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { CountriesComponent } from './countries/countries.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements AfterViewInit{
  countries: Array<any>
  region:string
  regSub = new BehaviorSubject<string>('')
  public get regionName() {
    return this.regSub.value
  }
  @Input()
  public set regionName(value: string) {
    this.regSub.next(value)
    // console.log(this._regionName);
  }
@Input()
testFlag: boolean
  constructor(private router: Router) {
    if(localStorage.length > 0) {
      this.region = localStorage.getItem('region')!
      this.getCountries(this.region)
    }
    
  }
  async getCountries(region: string) {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await response.json()
    return this.countries = data
  }
  navigateToCountry(route: string) {
    // localStorage.clear()
    localStorage.setItem('country', route)
    this.router.navigate([`regions/${this.region}/${route}`])
  }
  // @ViewChild(CountriesComponent) countries: CountriesComponent
  ngAfterViewInit(): void {

  }
}
