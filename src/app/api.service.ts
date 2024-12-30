import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Funzione per inviare i dati al server (API)
  sendFormData(formData: any): Observable<any> {
    const apiUrl = 'http://localhost:58065/api/Experts/SendEmail'; 
    return this.http.post(apiUrl, formData);
  }
}