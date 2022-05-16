import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-wamai',
  templateUrl: './wamai.component.html',
  styleUrls: ['./wamai.component.scss']
})
export class WamaiComponent implements OnInit {

  @Input() wamaiOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
