import { Component, OnInit } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { WebsocketService } from '../services/websocket.service';
import { MessageService } from '../services/message.service';
import { iWebSocket } from '../models/websocket-data';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css'],
})
export class ThirdSectionComponent implements OnInit {

  wsResponse: iWebSocket;

  constructor(private _msgService: MessageService) {
    _msgService.messages.subscribe(msg => {
      this.wsResponse = msg;
      console.log("Response from websocket: " + JSON.stringify(this.wsResponse));
    });
  }

  private message = {
    sensor: {
      uuid: "test",
      motor_rpm: 66,
      output: 3.2
    },
    lidar: {
      memory: {
        total: 16384,
        available: 13265
      },
      cpu: {
        1: 49,
        2: 4
      }
    }
  }
  ngOnInit(): void {
  }

}
