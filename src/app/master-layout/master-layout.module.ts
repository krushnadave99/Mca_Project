import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterLayoutRoutingModule } from './master-layout-routing.module';
import { GoogleSigninButtonModule, SocialLoginModule } from '@abacritt/angularx-social-login';
import { WindowRefService } from '../WindowRefServiceservice';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MasterLayoutRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers:[ WindowRefService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MasterLayoutModule { }
