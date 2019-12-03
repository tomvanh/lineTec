import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isSolid: Boolean = false;
  isCollapsed: Boolean = true;

  constructor(
    // tslint:disable-next-line: deprecation
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
    onWindowScroll() {
      const scrollTop = this.document.documentElement.scrollTop;
      // checks if window is scrolled more than 200px, adds/removes solid class
      if (scrollTop > 55) {
        this.isSolid = true;
      } else {
        this.isSolid = false;
      }
    }
}
