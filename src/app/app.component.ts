import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Compatibility-mode';
  constructor() {}
  async getC() {
    const resp = await fetch('https://restcountries.com/v3.1/all')
    console.log(await resp.json())
  }
}
