import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class WebsocketService {

   socket: any;


  constructor() {
    this.socket = io('ws://localhost:8080');
   }


   listen(eventName: String){
     return new Observable((subscriber) =>{
       this.socket.on(eventName, (data) =>{
         subscriber.next(data);
       })
     })

   }

   emmit(eventName: String, data: any){
     this.socket.emmit(eventName, data);
   }


}
