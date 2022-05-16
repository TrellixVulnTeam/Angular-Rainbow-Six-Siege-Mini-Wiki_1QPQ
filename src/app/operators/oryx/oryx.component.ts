import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-oryx',
  templateUrl: './oryx.component.html',
  styleUrls: ['./oryx.component.scss']
})
export class OryxComponent implements OnInit {

  @Input() oryxOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
