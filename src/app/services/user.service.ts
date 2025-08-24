import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../../../users/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "http://localhost:3000/users";

  users: User[] = [];

  authenticateUser(user: User): void {
    this.getAllUser().subscribe({
      next: (response) => {
        this.users = response;
        this.users.forEach(userResponse => {
          if ((userResponse.name === user.name) && (userResponse.password === user.password)) {
            console.log('Logado');
          } else {
            console.log('Passou Aqui');
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<User>(this.baseUrl, user);
  }

  getAllUser(): Observable<User[]> {
    let users = this.http.get<User[]>(this.baseUrl);

    return users;
  }
}
