import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  info = {
    street: 'Eikenlaan',
    number: '10',
    postal: '9111',
    city: 'Belsele',
    email: 'info@linetec.be',
    telephone: '+32476225818'
  };

  constructor() { }

  ngOnInit() {
  }

}
