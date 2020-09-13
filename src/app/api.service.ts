import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from './web-socket.service';
import { webSocket } from "rxjs/webSocket";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http: HttpClient
  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(http: HttpClient,private wsService: WebsocketService) {
    this.http = http;

   }


  getMessages(){
    return this.http.get('/api/default/messages');
  }

  sendMessage(message: {name: String, text: String}){
      return this.http.post('/api/default/messages', message)
    }

}
