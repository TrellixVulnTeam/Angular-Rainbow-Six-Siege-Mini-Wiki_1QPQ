import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-zero',
  templateUrl: './zero.component.html',
  styleUrls: ['./zero.component.scss']
})
export class ZeroComponent implements OnInit {

  @Input() zeroOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
