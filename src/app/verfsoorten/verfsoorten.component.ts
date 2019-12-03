import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verfsoorten',
  templateUrl: './verfsoorten.component.html',
  styleUrls: ['./verfsoorten.component.scss']
})
export class VerfsoortenComponent implements OnInit {
  infoPoints = [
    {
      icon: 'double-arrow-right-bottom',
      title: 'Gele verf',
      info: 'Morbi ac nunc est de la france de tesxt fermentum et adfundum'
    }, {
      icon: 'arrow-right-left',
      title: 'UV-Coating',
      info: 'Morbi ac nunc est de la france de tesxt fermentum et adfundum'
    }, {
      icon: 'arrow-diagonal-right',
      title: 'Sneldroog verf',
      info: 'Morbi ac nunc est de la france de tesxt fermentum et adfundum'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
