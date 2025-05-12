// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface AuthResponse {
  token: string;
  user: Object
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/v1';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage?.getItem('token');
    this.isLoggedInSubject.next(!!token);
  }

  isAuthenticatedUser(): any {
    return this.isLoggedInSubject.value;
  }

  register(user: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, user).pipe(
      map(response => {
        localStorage.setItem('token', response.token);
        this.isLoggedInSubject.next(true);
        return response;
      })
    );
  }

  login(user: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, user).pipe(
      map(response => {
        console.log("from service----------", response)
        localStorage.setItem('token', response.token);
        localStorage.setItem('currentUser', JSON.stringify(response?.user))
        this.isLoggedInSubject.next(true);
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/profile`);
  }

  getAdmin(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin`);
  }
}
