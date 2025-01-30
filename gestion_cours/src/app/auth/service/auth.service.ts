import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}?username=${username}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0]; // Récupère l'utilisateur correspondant
          // Vérifie si le mot de passe entré correspond à celui haché
          if (bcrypt.compareSync(password, user.password)) {
            localStorage.setItem('user', JSON.stringify(user)); // Stocke l'utilisateur en session
            return true;
          }
        }
        return false; // Échec de connexion
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
