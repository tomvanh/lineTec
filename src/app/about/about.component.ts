import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  subtitle: String = 'Kantoren';
  info: String = 'Ontdek onze 5 Hubs en hun bewoners';
  cards = [
    {
      image: 'alphaIT.png',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    }, {
      image: 'probofisc.png',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    }, {
      image: 'totalrenosolutions.png',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    }, {
      image: 'sass.png',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
    }, {
      image: null,
      description: 'Uw bedrijf misschien?'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
