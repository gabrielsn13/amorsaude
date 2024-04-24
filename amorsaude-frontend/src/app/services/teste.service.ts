import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Teste{
  titulo: string;
}

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<any>{
    return this.http.get<Teste>(`/api/usuario/${id}`);
  }
}
