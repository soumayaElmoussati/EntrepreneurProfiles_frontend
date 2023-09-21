import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:8000/api/';
  constructor(private http: HttpClient) {}
  
  getProfiles(): Observable<any> {
    return this.http.get(this.apiUrl+'profiles/');
  }

  deleteProfile(profileId: number): Observable<any> {
    const url = `http://localhost:8000/api/profiles/${profileId}/`;
    return this.http.delete(url);
  }

  registerUser(userData: any): Observable<any> {
    // Effectuez une requête POST pour l'inscription
    return this.http.post(`${this.apiUrl}/register/`, userData);
  }

  createProfile(profileData: any): Observable<any> {
    // Effectuez une requête POST pour la création du profil
    return this.http.post(`${this.apiUrl}create-profile/`, profileData);
  }

  
}
