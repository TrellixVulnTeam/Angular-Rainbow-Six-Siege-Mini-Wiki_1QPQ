import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-azami',
  templateUrl: './azami.component.html',
  styleUrls: ['./azami.component.scss']
})
export class AzamiComponent implements OnInit {

  @Input() azamiOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
