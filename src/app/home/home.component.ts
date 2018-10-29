import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  qoute = `Zorgeloos ondernemen in een historische setting,
  filevrij en centraal gelegen.`;

  constructor() {

  }

  ngOnInit() {
  }

}
