import { Component, OnInit } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  myWebSocket = webSocket('ws://localhost:3230');
  
  constructor() { }

  ngOnInit(): void {
  }


  

  // this.myWebSocket.asObservable().subscribe(dataFromServer => //...);
//   this.myWebSocket.asObservable().subscribe();
//   this.myWebSocket.next({message: 'some message'});

//   this.myWebSocket.subscribe(    
//     msg => console.log('message received: ' + msg), 
//     // Called whenever there is a message from the server    
//     err => console.log(err), 
//     // Called if WebSocket API signals some kind of error    
//     () => console.log('complete') 
//     // Called when connection is closed (for whatever reason)  
//  );
 


  // $scope.name = 'Rohit';
      // dataArr : any = [];

      // selectQues = function (quesObj : any) {

      //   socket.send(
      //     JSON.stringify({
      //       event: 'events',
      //       data: { id: quesObj._id },
      //     }),
      //   );

      // };


      // count : number = 0;

      // socket : any = new WebSocket('ws://localhost:3230');
      // socket.onopen = function () { 
      //   console.log('Connected');
      //   socket.send(
      //     JSON.stringify({
      //       event: 'events',
      //       data: { id: 'init' },
      //     }),
      //   );
      //   socket.onmessage = function (data : any) {
      //     //$timeout(function () {
      //       this.dataArr = JSON.parse(data.data);
      //     // }, 1);
      //   };
      // };

}
