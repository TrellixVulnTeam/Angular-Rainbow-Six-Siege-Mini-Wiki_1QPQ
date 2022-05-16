import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { AzamiComponent } from './azami/azami.component';
import { ThornComponent } from './thorn/thorn.component';
import { OsaComponent } from './osa/osa.component';
import { ThunderbirdComponent } from './thunderbird/thunderbird.component';
import { FloresComponent } from './flores/flores.component';
import { AruniComponent } from './aruni/aruni.component';
import { ZeroComponent } from './zero/zero.component';
import { AceComponent } from './ace/ace.component';
import { OperatorsfooterComponent } from './operatorsfooter/operatorsfooter.component';
import { MelusiComponent } from './melusi/melusi.component';
import { OryxComponent } from './oryx/oryx.component';
import { IanaComponent } from './iana/iana.component';
import { WamaiComponent } from './wamai/wamai.component';
import { KaliComponent } from './kali/kali.component';
import { AmaruComponent } from './amaru/amaru.component';
import { GoyoComponent } from './goyo/goyo.component';
import { NokkComponent } from './nokk/nokk.component';
import { Operators2Component } from './operators2/operators2.component';


@NgModule({
  declarations: [
    OperatorsComponent,
    AzamiComponent,
    ThornComponent,
    OsaComponent,
    ThunderbirdComponent,
    FloresComponent,
    AruniComponent,
    ZeroComponent,
    AceComponent,
    OperatorsfooterComponent,
    MelusiComponent,
    OryxComponent,
    IanaComponent,
    WamaiComponent,
    KaliComponent,
    AmaruComponent,
    GoyoComponent,
    NokkComponent,
    Operators2Component
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    MatCardModule,
  ]
})
export class OperatorsModule { }
