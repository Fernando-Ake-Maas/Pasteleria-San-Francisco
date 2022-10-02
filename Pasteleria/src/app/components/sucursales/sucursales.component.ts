import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.scss']
})
export class SucursalesComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title= "SUCURSALES";

   }

  ngOnInit(): void {
  }

}
