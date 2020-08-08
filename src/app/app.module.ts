// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './modules/general/home/home.component';
// import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// import { AppRoutingModule } from './app-routing.module';
// import { HttpClientModule } from '@angular/common/http';
// // import { HttpclientComponent } from './modules/application/httpclient/httpclient.component';
// // import { HttpclientModule } from './modules/application/httpclient/httpclient.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     NotFoundComponent,
//     // HttpClientModule
//   ],
//   imports: [
//     BrowserModule.withServerTransition({ appId: 'serverApp' }),
//     AppRoutingModule,
//     HttpClientModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
