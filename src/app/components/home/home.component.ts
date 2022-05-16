import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homePage = {
    firstTitle: "Stratejini belirle",
    secondTitle: 'SALDIRAN KARŞISINDA SAVUNAN',
    thirdTitle: 'OYUNDA 55 ÖZGÜN OPERATÖR SEÇENEĞİ, HER BİRİNİN SAVAŞTA SİZE YARDIM EDEBİLECEK CİHAZLARIYLA SUNULUYOR!',
    checkOperators: 'BÜTÜN OPERATÖRLERİ İNCELE',
    season: 'Her sezon',
    explore: "KEŞFEDILECEK YENI İÇERIKLER",
    newOps: 'YENİ OPERATÖRLER',
    newSkins: 'YENİ KAPLAMALAR',
    newEvents: 'YENİ ETKİNLİKLER',
    season1: 'HER SEZON OYUNA AKSİYONU TAZE VE HEYECANLI KILMAK İÇİN BİRÇOK',
    season2: ' ÜCRETSİZ İÇERİK VE DİĞER SÜRPRİZLER EKLENİYOR.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
