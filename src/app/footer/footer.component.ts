import { Component } from '@angular/core';
import { AboutMeDialogComponent } from '../about-me/about-me.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(AboutMeDialogComponent)
  }
}
