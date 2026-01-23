import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../modelo/Usuarios';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})

//[ESTRUTURA DO ARQUIVO FORMULARIO.TS]
export class Formulario {
  // @Output
  @Output() adicionar = new EventEmitter<Usuario>();

  // Variaveis
  dados: string = '';
  //
  nome: string = '';
  funcao: string = '';
  senha: string = '';

  // Cadastrar pessoa
  cadastrar(): void {
    // Objeto do tipo Pessoa
    let Ousuario = new Usuario();
    Ousuario.nome = this.nome;
    Ousuario.funcao = this.funcao;
    Ousuario.senha = this.senha;

    // Efetuar o cadastro
    this.adicionar.emit(Ousuario);

    // Limpar o formulÃ¡rio
    this.nome = '';
    this.funcao = '';
    this.senha = '';
  }
}
