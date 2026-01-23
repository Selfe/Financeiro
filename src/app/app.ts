import { Component, signal } from '@angular/core';
import { Rotas } from './rotas/rotas';

//import { RouterOutlet } from '@angular/router';
//import { MenuGeral } from './menu-geral/menu-geral';
//import { Formulario } from './formulario/formulario';
//import { LoginUser } from './login-user/login-user';
//import { Produto } from './produto/produto';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Rotas],
  //imports: [MenuGeral, LoginUser],
  //imports: [LoginUser],
  //imports: [LoginUser],
})
export class App {
  protected readonly title = signal('ContaReceber');
}
