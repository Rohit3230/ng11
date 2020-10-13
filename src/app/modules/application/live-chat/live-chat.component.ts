import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent implements OnInit {
  message:any = {
    name:null
  };
  constructor() { }

  ngOnInit(): void {
  }

}
