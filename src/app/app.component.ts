import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'Huur kantoren in ons business center, the hub' },
      { name: 'author', content: 'the HUB' },
      { name: 'keywords', content: 'hub, business center, kantoorruimte, huren' },
      { name: 'og:title', content: 'hubbusinesscenter the hub, Huur kantoren in ons business center' },
      { name: 'twitter:title', content: 'hubbusinesscenter the hub, Huur kantoren in ons business center' },
    ]);
  }
}
