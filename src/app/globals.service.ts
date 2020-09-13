import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  currentUser: String = 'guest';

  constructor() { }
}
