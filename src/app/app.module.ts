import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { ChatBotModule } from './modules/application/chat-bot/chat-bot.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ChatBotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
