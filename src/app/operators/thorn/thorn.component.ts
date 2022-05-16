import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-thorn',
  templateUrl: './thorn.component.html',
  styleUrls: ['./thorn.component.scss']
})
export class ThornComponent implements OnInit {

  @Input() thornOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
