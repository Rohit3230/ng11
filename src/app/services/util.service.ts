import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private isConsented: boolean = false;

  constructor() {
    // this.isConsented = this.getCookie('COOKIE_CONSENT') === '1';
  }


  getBaseUrl() {
    const url: string = 'http://3.12.132.105:4000/';
    // const version: string = "v0/";
    // let baseurl: string = url + version;
    return url;
  }

  getWebSocketBaseUrl() {
    const url: string = 'ws://3.12.132.105:3230/';
    // const version: string = "v0/";
    // let baseurl: string = url + version;
    return url;
  }

  getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');
        if (c.indexOf(cookieName) == 0) {
            return c.substring(cookieName.length, c.length);
        }
    }
    return '';
}

deleteCookie(name : string) {
  this.setCookie(name, '', -1);
}


setCookie(name: string, value: string, expireDays: number, path: string = '') {
  let d:Date = new Date();
  d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
  let expires:string = `expires=${d.toUTCString()}`;
  let cpath:string = path ? `; path=${path}` : '';
  document.cookie = `${name}=${value}; ${expires}${cpath}`;
}

isValidId(str:string) {
  if (str != undefined) {
      var splitInput = str.split(',');
      var pattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$';

      var match = true;

      for (var i = 0; i < splitInput.length; i++) {
          if (!splitInput[i].match(pattern)) {
              match = false;
              break;
          }
      }
      return match;
  }else{
    return false;
  }
}

// consent(isConsent: boolean, e: any) {
//   if (!isConsent) {
//       return this.isConsented;
//   } else if (isConsent) {
//       this.setCookie('COOKIE_CONSENT', '1', 1);
//       this.isConsented = true;
//       e.preventDefault();
//   }
// }

}