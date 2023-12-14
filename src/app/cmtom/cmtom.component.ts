import { Component } from '@angular/core';

@Component({
  selector: 'app-cmtom',
  templateUrl: './cmtom.component.html',
  styleUrl: './cmtom.component.css'
})
export class CmtomComponent {
  centimeters: number = 0;
  meters: number = 0;

  convertToMeters() {
    this.meters = this.centimeters / 100; // Conversion logic: centimeters to meters
  }


}
