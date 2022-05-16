import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nokk',
  templateUrl: './nokk.component.html',
  styleUrls: ['./nokk.component.scss']
})
export class NokkComponent implements OnInit {

  @Input() nokkOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
