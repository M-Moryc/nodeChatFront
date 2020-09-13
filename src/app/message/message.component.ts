import { Component, OnInit, Input } from '@angular/core';
import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() text: String;
  @Input() user: String;
  globals: GlobalsService;

  constructor(globalsService: GlobalsService) {
    this.globals = globalsService;
   }

  ngOnInit(): void {
  }

}
