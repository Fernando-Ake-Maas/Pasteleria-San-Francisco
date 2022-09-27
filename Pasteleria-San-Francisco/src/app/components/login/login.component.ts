import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public page_title: string;

  constructor() {

    this.page_title= "Login";
   }

  ngOnInit(): void {
  }

}
