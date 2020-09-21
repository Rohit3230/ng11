import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin.component';
import { SigninRoutingModule } from './signin-routing.module';
import { HttpService } from '../../../services/http.services';
import { UtilService } from '../../../services/util.service';

@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    HttpModule,
    FormsModule
  ],
  // exports: [
  //   SigninComponent,
  //   HttpService
  // ], 
  declarations: [
    SigninComponent
  ],
  providers: [
    HttpService,
    UtilService
  ],
})
export class SigninModule { }