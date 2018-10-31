import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  info = {
    street: 'Vrijheidstraat',
    number: '30',
    postal: '9140',
    city: 'Temse',
    email: 'info@hubbusinesscenter.be',
    telephone: '+32485558588'
  };

  constructor() { }

  ngOnInit() {
  }

}
