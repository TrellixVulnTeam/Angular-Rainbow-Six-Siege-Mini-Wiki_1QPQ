import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-osa',
  templateUrl: './osa.component.html',
  styleUrls: ['./osa.component.scss']
})
export class OsaComponent implements OnInit {

  @Input() osaOperator: any;

  constructor() { }

  ngOnInit(): void {
  }

}
