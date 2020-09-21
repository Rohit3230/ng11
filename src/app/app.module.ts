import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UtilService } from './services/util.service';
import { HttpService } from './services/http.services';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // exports : [
  //   HttpService
  // ],
  providers: [
    HttpModule,
    UtilService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
