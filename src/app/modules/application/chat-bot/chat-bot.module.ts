import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBotComponent } from './chat-bot.component';
import { ChatBotRoutingModule } from './chat-bot.module-routing.module';



@NgModule({
  // declarations: [],
  // // exports:[
  // //   ChatBotComponent
  // // ],
  // imports: [
  //   CommonModule,
  //   ChatBotComponent,
  //   ChatBotRoutingModule
  // ]
  imports: [
    CommonModule,
    ChatBotRoutingModule,
    // HttpClientModule
  ],
  exports: [
    ChatBotComponent
  ],
  declarations: [
    ChatBotComponent
  ],
  providers: [
    
  ],
})
export class ChatBotModule { }
