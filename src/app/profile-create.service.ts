import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileCreateService {

  private apiUrl = 'http://localhost:8000/api/create/';

  constructor(private http: HttpClient) { }

  createProfile(profileData: any): Observable<any> {
    return this.http.post(this.apiUrl, profileData);
  }
}
