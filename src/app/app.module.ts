import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { RegionComponent } from './regions/region/region.component';
import { CountriesComponent } from './regions/region/countries/countries.component';
import { LetModule } from '@ngrx/component';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from './regions/actions/regions-reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegionComponent,
    CountriesComponent,
    RegionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LetModule,
    StoreModule.forRoot({region: regionReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
