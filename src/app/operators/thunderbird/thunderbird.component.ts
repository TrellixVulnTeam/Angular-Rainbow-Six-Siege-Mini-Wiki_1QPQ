import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-thunderbird',
  templateUrl: './thunderbird.component.html',
  styleUrls: ['./thunderbird.component.scss']
})
export class ThunderbirdComponent implements OnInit {

  @Input() thunderbirdOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
