import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title= "CONTACTANOS";
   }

  ngOnInit(): void {
  }

}
