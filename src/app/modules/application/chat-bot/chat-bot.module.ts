import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { formsModule } from '@angular/forms';
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
    // formsModule
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
