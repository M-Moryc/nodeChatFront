import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { GlobalsService } from './globals.service';
import { WebsocketService } from './web-socket.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nodeChatFront';
  apiService : ApiService;
  websocketService: WebsocketService;
  globals: GlobalsService;
  messages: Subject<any> = new Subject();
  //currentUser = 'guest';
  currentMessage = '';


  constructor(apiService : ApiService, websocketService: WebsocketService, globalService: GlobalsService){
    this.apiService = apiService;
    this.websocketService = websocketService;
    this.globals = globalService;
  }

  ngOnInit(){this.apiService.getMessages().subscribe((data) =>{
    console.log(data);
  this.messages.next(data);});

      this.websocketService.listen('message').subscribe((res) =>{
        this.apiService.getMessages().subscribe((data) =>{
          this.messages.next(data);
        })
      })

  }
  onSubmit(e: Event){
    e.preventDefault();
    if(this.globals.currentUser && this.currentMessage){
      this.apiService.sendMessage({name: this.globals.currentUser, text: this.currentMessage}).subscribe(
        (res) => {
          //console.log(res)
        }
      )
    }
    return false;
  }
}
