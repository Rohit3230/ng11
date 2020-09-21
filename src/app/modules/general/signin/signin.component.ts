import { Component, OnInit, Input } from '@angular/core';
// import { debug } from 'console';
// import { EmailValidator } from '@angular/forms';

import { HttpService } from '../../../services/http.services';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginObj:any = {"userEmail":undefined, 'userPassword':undefined};

  constructor(
    private _httpService:HttpService,
    private _utilService:UtilService
  ) {}

  ngOnInit(): void {
    
  }

  validateSignInForm():void{
    if(
      !this.loginObj.userEmail
      &&
      !this.loginObj.userPassword
    ){
      this.loginObj.signInAPIStatus = 'Please Fill All Required Fields.';
    }else if(
      !this.loginObj.userEmail
    ){
      this.loginObj.signInAPIStatus = 'Please Fill Required Email Id.';
    }else if(
      !this._utilService.isValidId(this.loginObj.userEmail)
    ){
      this.loginObj.signInAPIStatus = 'Please Enter Valid User Email Id.';
    }else if(
      !this.loginObj.userPassword
    ){
      this.loginObj.signInAPIStatus = 'Please Fill Required Password.';
    }else{

    }
    if(
      !this.loginObj.signInAPIStatus
    ){
      this.loginObj.signInAPIStatus = 'Please Wait...!';
    }
  }

  signIn(): void{
    debugger;
    this.loginObj.signInAPIStatus = null;
    this.validateSignInForm();
    if(
      this.loginObj.signInAPIStatus == 'Please Wait...!'
    ){
      let loginReqObj = {"BusinessEMail":this.loginObj.userEmail,"Password":this.loginObj.userPassword,"url":"login/"}
      this._httpService.post( this._httpService.loginUser, {}, loginReqObj )
      .subscribe(response => (this.loginObj.loginResponse = response, this.loginObj.signInAPIStatus = 'success'),
      error => (this.loginObj.signInAPIStatus = <any>error, this.loginObj.signInAPIStatus = 'failed'));
    }else{

    }
  }

}
