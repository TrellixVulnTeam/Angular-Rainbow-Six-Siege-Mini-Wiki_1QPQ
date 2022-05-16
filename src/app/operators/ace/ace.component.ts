import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.scss']
})
export class AceComponent implements OnInit {

  @Input() aceOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
