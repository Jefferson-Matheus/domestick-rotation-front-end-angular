import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Responsible } from '../../../../responsibles/responsible';

@Injectable({
  providedIn: 'root'
})
export class ResponsibleService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/responsibles";

  getAllResponsibles(): Observable<Responsible[]>{
      let responsibles = this.http.get<Responsible[]>(this.baseUrl);
    
      return responsibles;
  }
}
