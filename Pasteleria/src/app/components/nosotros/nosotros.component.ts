import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title= "CONOCENOS";
   }

  ngOnInit(): void {
  }

}
