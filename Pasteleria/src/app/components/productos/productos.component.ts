import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title= "NUESTROS PRODUCTOS";
    
   }

  ngOnInit(): void {
  }

}
