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

  isLoggin: boolean = false;

  authenticateUser(user: User): void {
    this.getAllUser().subscribe({
      next: (response) => {
        this.users = response;
        this.users.forEach(userResponse => {
          if ((userResponse.name === user.name) && (userResponse.password === user.password)) {
            this.isLoggin = true
            console.log(user);
          } 
        });
        
        if (this.isLoggin){
          alert("Logado com Sucesso");
        }else{
          alert("Senha ou Usuario errados, tente novamente");
        }
      },
      error: (error) => {
        console.log(error);
        alert("Algo de errado aconteceu, tente novamente");
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
