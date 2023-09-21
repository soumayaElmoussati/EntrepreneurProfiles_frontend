import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionDataService {

  private apiUrl = 'http://localhost:8000/api/';


  constructor(private http: HttpClient) { }

  getSubscriptions(): Observable<any> {
    return this.http.get(this.apiUrl+'subscriptions/');
  }


}
