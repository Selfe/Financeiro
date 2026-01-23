import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/Usuarios';

@Injectable({
  providedIn: 'root',
})
export class ApiUsuarios {
  // URL da API
  private url: string = 'http://localhost:3000/usuarios/';

  // Construtor
  constructor(private http: HttpClient) {}

  // Listar todas os usuarios
  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  // Cadastrar usuarios
  cadastrar(usuarios: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, JSON.stringify(usuarios));
  }

  // Selecionar usuario por id
  selecionarUsuario(id: string): Observable<Usuario> {
    //return this.http.get<Pessoa>(this.url + id);
    return this.http.get<Usuario>(`${this.url}${id}`);
  }

  // Alterar usuarios
  alterar(usuarios: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      this.url + usuarios.id,
      JSON.stringify(usuarios),
    );
  }

  // Remover usuarios
  remover(id: string): Observable<Usuario> {
    return this.http.delete<Usuario>(this.url + id);
  }
}
