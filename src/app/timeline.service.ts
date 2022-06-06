import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ievent } from './interfaces/Ievent';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  url="https://nclsbayona.github.io/MyTimelineAPI/db.json"
  getTimeline():Observable<Ievent[]> {
    return this.client.get<Ievent[]>(this.url);
  }

  constructor(private client:HttpClient) { }
}
