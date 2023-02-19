import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './regions/region/region.component';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './regions/region/countries/countries.component';

const routes: Routes = [
  { path: 'regions', component: RegionsComponent},
  {path: '', redirectTo: '/regions', pathMatch: 'full'},
  {
    path:'regions/:id',
    title:'region',
    component: RegionComponent
  },
  {
    path:'regions/:id/:id',
    title:'region',
    component: CountriesComponent
  },
  // {
  //   path:'regions/america',
  //   title:'africa',
  //   component: RegionComponent
  // },
  // {
  //   path:'regions/asia',
  //   title:'africa',
  //   component: RegionComponent
  // },
  // {
  //   path:'regions/europe',
  //   title:'africa',
  //   component: RegionComponent
  // },
  // {
  //   path:'regions/oceania',
  //   title:'africa',
  //   component: RegionComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
