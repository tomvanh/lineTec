import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {
  title: String = 'Uw onderneming, onze zorgen.';
  text: String = `Morbi ac nunc quam. Ut efficitur ex risus, vel blandit erat fermentum nec. Proin in blandit arcu.
  Sed vitae laoreet neque. Aenean sollicitudin, orci non consequat aliquet, felis nisl pulvinar mi, ut tempus leo nisi eu arcu.
  Morbi lectus mi, vehicula in purus non, vehicula vehicula sapien. Donec convallis, nibh ac pulvinar consectetur,
  leo nisi interdum diam, sed lobortis mauris augue nec felis. Nunc efficitur sed lorem non molestie. Nam mattis ante turpis,
  ac efficitur est iaculis et. Praesent sem eros, aliquet sit amet hendrerit ut, porta sed quam. Maecenas bibendum imperdiet bibendum
  Mauris ornare posuere neque id elementum. Ut eget cursus neque. Suspendisse porttitor mattis enim eu tempus.`;
  qoute: String = '"Eindelijk geen file onderweg naar kantoor"';
  qouteWriter: String = '- E. Peeters';
  infoOne: String = 'Flexibele ruimtes, Prachtig gerenoveerd';
  infoTwo: String = 'Lorem ipsum dolor sit amet';
  infoTwoSub: String = 'Hub Network';
  infoPoints = [
    {
      icon: 'double-arrow-right-bottom',
      title: 'Co-working is de sleutel tot succes',
      info: 'Morbi ac nunc est de la france de tesxt fermentum et adfundum'
    }, {
      icon: 'arrow-right-left',
      title: 'Verscheidenheid zorgt voor creativiteit',
      info: 'Morbi ac nunc est de la france de tesxt fermentum et adfundum'
    }, {
      icon: 'arrow-diagonal-right',
      title: 'Samen bouwen aan een geheel',
      info: 'Morbi ac nunc est de la france de tesxt fermentum et adfundum'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
