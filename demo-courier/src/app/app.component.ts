import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  date1: any;
 
  menu: object [] = [];  

  isVisibleForm = true;

  constructor(private messageService: MessageService) {}

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

  grabarForm() {
    this.isVisibleForm = false 
    this.isVisibleForm = true
    this.messageService.add({severity:'success', summary:'Confirmación', detail:'Se Guardo con Exito '});
    // setTimeout(() => {
    //     this.isVisibleForm = true
    // },0);
  }
}
