import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {
    localStorage.clear()
  }

  navigateToRegion(route: string) {
    localStorage.setItem('region', route)
    this.router.navigate([`regions/${route}`])
  }
}
