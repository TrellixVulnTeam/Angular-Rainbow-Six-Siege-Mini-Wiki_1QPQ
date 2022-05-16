import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-amaru',
  templateUrl: './amaru.component.html',
  styleUrls: ['./amaru.component.scss']
})
export class AmaruComponent implements OnInit {

  @Input() amaruOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
