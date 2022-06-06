import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Igithubaevent } from 'src/app/interfaces/Igithubaevent';

@Injectable({
  providedIn: 'root'
})
export class GithubActivityService {

  url="https://api.github.com/users/nclsbayona/events"


  constructor(private client:HttpClient) { }

  getActivity():Observable<Igithubaevent[]> {
    return this.client.get<Igithubaevent[]>(this.url, {headers:{'Accept': 'application/json'}});
  }
}
