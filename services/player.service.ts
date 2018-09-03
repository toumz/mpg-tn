import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  constructor(private http:HttpClient) { }

  getPlayers() {
    return this.http.get('/player');
  }

  getPlayer(id) {
    return this.http.get('/player/'+id);
  }

  savePlayer(data) {
    return this.http.post('/player', data);
  }

}
