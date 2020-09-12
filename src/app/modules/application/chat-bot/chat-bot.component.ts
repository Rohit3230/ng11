import { Component, OnInit } from '@angular/core';
// import { WebsocketService } from "./websocket.service";
import { ChatService } from "./chat.service";

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  private message = {
    author: "tutorialedge",
    message: "this is a test message"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.chatService.messages.next(this.message);
    this.message.message = "";
  }

}
