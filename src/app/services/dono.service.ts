import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Dono {
  nome: string;
  email: string;
  rua: string;
  cidade: string;
  estado: string;
  cep: string;
  telefone?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DonoService {
  private apiUrl = 'http://localhost:3000/api/donos';

  constructor(private http: HttpClient) {}

  // Método para obter os dados do dono pelo ID
  getDono(id: number): Observable<Dono> {
    return this.http.get<Dono>(`${this.apiUrl}/${id}`);
  }

  // Método para atualizar os dados do dono
  updateDono(id: number, dono: Dono): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dono);
  }
}
