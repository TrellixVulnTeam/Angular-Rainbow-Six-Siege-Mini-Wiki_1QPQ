import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-goyo',
  templateUrl: './goyo.component.html',
  styleUrls: ['./goyo.component.scss']
})
export class GoyoComponent implements OnInit {

  @Input() goyoOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
