import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-iana',
  templateUrl: './iana.component.html',
  styleUrls: ['./iana.component.scss']
})
export class IanaComponent implements OnInit {

  @Input() ianaOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
