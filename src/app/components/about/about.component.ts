import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutPage = {
    firstTitle: '"RAINBOW SIX SIEGE DAHA BÜYÜK VE DAHA İYİ OLDU"',
    secondTitle: 'IGN, WEB DERGİLERİNİN 1 NUMARASI',
    gameplay: 'Oynayış',
    players: 'EKİBİ TOPLAYIN VE İÇERİ GİRİN!',
    friends1: 'DERECELI FPS',
    friends2: "AKSIYON DOLU 5'E 5 PVP AKSIYON OYUNU",
    friends3: 'YOK EDILEBILIR ORTAM',
    mods: '3 MODLAR',
    bomb: 'BOMBA',
    control: 'BÖLGE KONTROLÜ',
    rescue: 'REHİNE KURTARMA'
  }

  constructor() {}

  ngOnInit(): void {
  }

}
