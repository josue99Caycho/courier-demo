import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  date1: any;
 
  menu: object [] = [];  

  ngOnInit(): void {
    this.menu = [
      {label: '  ', style: 'background-image: url("../../demo-courier/src/assets/img/Raster.png") !important;'},
      {label: 'Home'},
      {label: 'Courier'},
      {label: 'Exportaciones'},
      {label: 'Softpad'},
      {label: 'Search', icon: 'pi pi-search'},
  ];
  }
}
