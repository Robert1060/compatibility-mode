import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent {
  isLoading:boolean = true
  countries: Array<any>
  region:string
  regSub = new BehaviorSubject<string>('')
  public get regionName() {
    return this.regSub.value
  }
  @Input()
  public set regionName(value: string) {
    this.regSub.next(value)
  }
@Input()
testFlag: boolean
  constructor(private router: Router) {
    if(localStorage.length > 0) {
      const country = localStorage.getItem('country')
      if(country) {
        localStorage.removeItem('country')
      }
      this.region = localStorage.getItem('region')!
      this.getCountries(this.region)
    }
    
  }
  async getCountries(region: string) {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await response.json()
    this.isLoading = false
    return this.countries = data
  }
  navigateToCountry(route: string) {
    localStorage.setItem('country', route)
    this.router.navigate([`regions/${this.region}/${route}`])
  }

}
