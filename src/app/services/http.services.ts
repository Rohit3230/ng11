// import { Injectable } from '@angular/core';  
// import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/throw';
// import 'rxjs/Rx';
// import { map } from "rxjs/operators";


import { UtilService } from './util.service';

const httpOptions = {
	headers: new HttpHeaders(
	  {
		'Content-Type': 'application/json',
	  }
	)
  };

@Injectable({  
	providedIn: 'root'  
})  
export class HttpService {

	// private SERVER_URL = "http://localhost:3000";
	// constructor(private httpClient: HttpClient) { }

	// public fetchData(){  
	// 	return this.httpClient.get(`${this.SERVER_URL}/products`);  
	// }  

	loginUser : string = 'https://api.yogems.com/api/v0/login/';

	constructor(
		private _http: HttpClient,
		private _Helpers: UtilService,
	   // private _headers : Headers
	  ) { }

	  get(url: string) {
		return this._http.get(url, httpOptions);
	  }

	  post(url: string, body:any, headers:any) {
		return this._http.post(url, body, headers ? headers : httpOptions);
	  }

	  update(url: string, body:any, headers:any) {
		return this._http.put(url, body, headers ? headers : httpOptions);
	  }

	//   delete(url: string, body:any, headers:any) { 
	// 	return this._http.delete(url, body, headers ? headers : httpOptions);
	//   }

	  
		// const httpOptions = {
		// 	headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: your body data
		// };


		// return new Promise(resolve => {
		// 	this.httpClient.delete(URL, httpOptions)       
		// 				.subscribe(res => {     
		// 					resolve(res);
		// 				}, err => {               
		// 					resolve(err);
		// 				});
		// 	});





	// get(url: any, header: any): Observable<any[]> {
	// 	header ? header : {};
	// 	return this._http.get(url, header)
	// 	  .map((response: Response) => <any[]>response.json())
	// 	  //.do(data => console.log('All: ' +  JSON.stringify(data)))
	// 	  .catch(this.handleError);
	//   };
	
	//   getHomeFeed(url: any, header: any): Observable<any> {
	// 	let dataResponse: any;
	// 	header = { 'Accept': 'application/xml' };
	// 	return this._http.get(url, {
	// 	  headers: header
	// 	})
	// 	  .map((response: Response) => <any>response)
	//   };
	
	//   post(url: string, header : any,  body :  any): Observable<any[]> {
	// 	header ? header : {};
	// 	header['Content-Type'] = 'application/json';

	// 	return this.http
	// 	.post<ResponseBody>(
	// 		url,
	// 		JSON.stringify(body),
	// 		header
	// 	)
	// 	.pipe(
	// 		map(response => {
	// 		if (response.success) {
	// 		} else {
	// 		}
	// 		return response;
	// 		}),
	// 		catchError(err => GlobalService.handleError(err))
	// 	);
	// 	// return this._http.post<ResponseBody>(url, JSON.stringify(body), header)
	// 	// .pipe(
	// 	//   .map((response: Response) => <any[]>response.json().data)
	// 	//   //.do(data => console.log('All: ' +  JSON.stringify(data)))
	// 	//   .catch(this.handleError)
	// 	// )
	//   };
	
	//   put(url: string, body : any, header : any): Observable<any[]> {
	// 	header ? header : {};
	// 	header.append('Content-Type', 'application/json');
	// 	return this._http.put(url, header, body)
	// 	  .map((response: Response) => <any[]>response.json().data)
	// 	  //.do(data => console.log('All: ' +  JSON.stringify(data)))
	// 	  .catch(this.handleError);
	//   };
	
	//   delete(url: string, body : any, header : any): Observable<any[]> {
	// 	header ? header : {};
	// 	header.append('Content-Type', 'application/json');
	// 	return this._http.get(url, header)
	// 	  .map((response: Response) => <any[]>response.json().data)
	// 	  .catch(this.handleError);
	//   };
	
	//   private handleError(error: Response) {
	// 	console.error(error);
	// 	return Observable.throw(error.json().error || 'Server error');
	//   }
}
