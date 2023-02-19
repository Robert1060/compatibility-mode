import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegionComponent } from './region/region.component';
import { setRegion } from './actions/regions-actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {
  regions = [
    {name: 'Africa'},
    {name: 'America'},
    {name: 'Asia'},
    {name: 'Europe'},
    {name: 'Oceania'}
  ] 
  constructor(private router: Router, private store: Store<any>) {
    // this.store.dispatch(setRegion({regionName : 'test'}))
    localStorage.clear()

  }
  // @ViewChild(RegionComponent) region: RegionComponent
  // ngAfterViewInit(): void {
  //   console.log(this.region);
    
  // }
  navigateToRegion(route: string) {
    localStorage.setItem('region', route)
    this.router.navigate([`regions/${route}`])
  }
}
