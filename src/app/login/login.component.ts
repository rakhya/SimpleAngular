import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  langs = ["Angular","React","JQuery","Java","Python","C#"];
  constructor() { }

  ngOnInit() {
  }

}
