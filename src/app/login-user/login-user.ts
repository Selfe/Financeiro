import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../modelo/Usuarios';

@Component({
  selector: 'app-login-user',
  imports: [CommonModule, ReactiveFormsModule],

  templateUrl: './login-user.html',
  styleUrl: './login-user.css',
})

//export class LoginUser {
// imagem: string = 'dia.jpg';
//alterarImagem(): void {
//this.imagem = this.imagem == 'dia.jpg' ? 'noite.jpg' : 'dia.jpg';
//}
//}

//--------------------------------------------------------------------//
// Objeto de formulario login do usuario
//--------------------------------------------------------------------//
export class LoginUser {
  // variaveis para tratar a visibilidade dos botoes
  btnCadastrar: boolean = true;

  //
  usuario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(5)]),
    funcao: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  // vetor armazenar dados da tela dentro da tabela
  vetor: Usuario[] = [];
  //--------------------------------------------------------------------//
  // Índice da pessoa selecionada
  //--------------------------------------------------------------------//
  indiceUsuarioSelecionado: number = -1;

  //--------------------------------------------------------------------//
  // Método para efetuar o cadastro
  //--------------------------------------------------------------------//
  cadastrar(): void {
    this.vetor.push(this.usuario.value as Usuario);
    this.usuario.reset();
  }
  //--------------------------------------------------------------------//
  // Método para selecionar uma pessoa específica
  //--------------------------------------------------------------------//
  selecionar(indice: number): void {
    this.indiceUsuarioSelecionado = indice;

    this.usuario.get('nome')?.setValue(this.vetor[indice].nome || '');
    this.usuario
      .get('senha')
      ?.setValue(this.vetor[indice].senha?.toString() || '');
    this.usuario.get('funcao')?.setValue(this.vetor[indice].funcao || '');

    this.btnCadastrar = false;
  }

  //--------------------------------------------------------------------//
  // Método para cancelar as ações de alteração e remoção do usuario
  //--------------------------------------------------------------------//
  cancelar(): void {
    this.usuario.reset();

    this.indiceUsuarioSelecionado = -1;

    this.btnCadastrar = true;
  }
  //--------------------------------------------------------------------//
  // Método para alterar dados
  //--------------------------------------------------------------------//
  alterar(): void {
    this.vetor[this.indiceUsuarioSelecionado] = this.usuario.value as Usuario;

    this.cancelar();
  }

  //--------------------------------------------------------------------//
  // Método para excluir/remover pessoas
  //--------------------------------------------------------------------//
  remover(): void {
    this.vetor.splice(this.indiceUsuarioSelecionado, 1);

    this.cancelar();
  }
}
