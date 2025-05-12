import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProductService {
  private apiUrl = 'http://localhost:3000/api/v1/service';
  constructor(private http: HttpClient) { }

  createService(service: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`, service);
  }
   updateService(service: any,serviceId:any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${serviceId}`, service);
  }
  getService(service: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${service}`);

  }
  deleteService(serviceId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${serviceId}`);
  }
  allService(service?: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/list/all`);

  }
}
