import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ClassActivity';
  celsius: number = 0;
  name : string = "";
  todayDate: string = "";
  constructor(){}

  ngOnInit(): void{
      this.todayDate = new Date().toDateString();
  }

}
