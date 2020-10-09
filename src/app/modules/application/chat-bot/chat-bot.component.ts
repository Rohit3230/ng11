import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  message:string ='init';
  subject = webSocket("ws://localhost:3230");
  constructor() { }

  ngOnInit(): void {
  }

  sendMsg() {
    // this.subject.subscribe();
    this.subject.next({"event":"events","data":{"id":"init"}});
    // this.subject.complete();
    console.log("new message from client to websocket: ");
    var completed = function(){
      console.log('Completed Called***');
      // this.subject.complete();
    }
    this.subject.subscribe(
      function(msg){
        setTimeout(function () {
          try {
            console.log('msg****',msg);
          } catch (e) {
            console.log('msg**e**',e);
          } finally {
            console.log('msg***final*');
          }
        }, 1000);
      },
      function(err){
        console.log(err);
      },
      function(){
        console.log('complete');
        completed(); 
        // this.getMessage();
      }
      // msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
      // err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      // () => console.log('complete') // Called when connection is closed (for whatever reason).
    ); 

  }

  getMessage(){
    this.subject.complete();
  }

}
