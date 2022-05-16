import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-kali',
  templateUrl: './kali.component.html',
  styleUrls: ['./kali.component.scss']
})
export class KaliComponent implements OnInit {

  @Input() kaliOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
