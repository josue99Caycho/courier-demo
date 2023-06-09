import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listStatus: object[] = [];

  typeDocuments: object[] = [];

  products: object[] = [];

  menu: object [] = [];

  today: Date = new Date();

  isVisibleForm = true;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.menu = [
      {label: ''},
      {label: 'HOME'},
      {label: 'COURIER'},
      {label: 'EXPO'},
      {label: 'SOFTPAD'},
      {label: 'SEARCH', icon: 'pi pi-search'},
  ];

    this.products = [ 
      { name: 'OUT OUTBOUND'},
      { name: 'INBOUND'}
    ]

    this.typeDocuments = [ 
      { name: 'DNI'},
      { name: 'RUC'}
    ]

    this.listStatus = [
      { name: 'Activo'},
      { name: 'Inactivo'}
    ]
  }

  grabarForm() {
    this.isVisibleForm = false 
    this.messageService.add({severity:'success', summary:'Confirmación', detail:'Se Guardo con Exito '});
    setTimeout(() => {
        this.isVisibleForm = true
    },0);
  }
}
