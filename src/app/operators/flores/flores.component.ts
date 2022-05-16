import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.scss']
})
export class FloresComponent implements OnInit {

  @Input() floresOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
