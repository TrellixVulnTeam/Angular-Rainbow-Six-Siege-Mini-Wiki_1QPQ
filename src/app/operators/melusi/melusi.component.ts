import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-melusi',
  templateUrl: './melusi.component.html',
  styleUrls: ['./melusi.component.scss']
})
export class MelusiComponent implements OnInit {

  @Input() melusiOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
