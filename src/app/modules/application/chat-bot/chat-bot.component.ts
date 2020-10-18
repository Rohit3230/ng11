import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  // thisIns = this;
  // chatQuesId:string ='init';
  
  constructor(
    private _Helpers: UtilService
  ) { }

  subject = webSocket("ws://localhost:3230");
  // subject = webSocket(this._Helpers.getWebSocketBaseUrl());
  chatAnsArray:any=[];

  ngOnInit(): void {
    this.getAnswers('init');
  }

  getAnsArrays(chatAnsArr:any){
    // debugger;
    // console.log('chatAnsArr****', chatAnsArr);
    this.chatAnsArray = chatAnsArr;
    // this.subject.complete();
  }

  openLiveChat(){
    
  }

  getAnswers(parentId:string) {
    this.subject.next({"event":"events","data":{"id": parentId }});
    console.log("new message from client to websocket: ");
    // var completed = function(){
    //   // debugger;
    //   console.log('Completed Called***');
    // }
    this.subject.subscribe(
      // function(chatAnsArr){
      //   setTimeout(function () {
      //     try {
      //       console.log('msg****',chatAnsArr);
      //       this.getAnsArrays(chatAnsArr);
      //       // this.chatAnsArray = chatAnsArr;
      //     } catch (e) {
      //       console.log('msg**e**',e);
      //     } finally {
      //       console.log('msg***final*');
      //     }
      //   }, 1000);
      // },
      // function(err){
      //   console.log(err);
      // },
      // function(){
      //   console.log('complete');
      //   completed(); 
      // }
      chatAnsArr => this.getAnsArrays(chatAnsArr), // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    ); 

  }

}