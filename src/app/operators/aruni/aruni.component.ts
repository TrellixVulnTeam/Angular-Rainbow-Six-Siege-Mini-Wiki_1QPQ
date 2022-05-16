import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-aruni',
  templateUrl: './aruni.component.html',
  styleUrls: ['./aruni.component.scss']
})
export class AruniComponent implements OnInit {

  @Input() aruniOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
