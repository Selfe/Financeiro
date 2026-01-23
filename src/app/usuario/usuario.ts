import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { MatHeaderRowDef, MatTableModule } from '@angular/material/table';
import { ApiUsuarios } from '../servicos/api-usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',

  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatHeaderRowDef,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Usuario {
  [x: string]: any;
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  //visibilidade dos botoes
  btnCadastrar: boolean = true;

  // Colunas da tabela usuarios
  colunas: String[] = ['id', 'nome', 'funcao', 'email', 'senha', 'selecionar'];

  // Vetor modelo Usuario para armazenar as informacoes na tabela
  vetor: Usuario[] = [];

  // instaciando Objeto - Formulario Reativo
  formularioUsuario = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    funcao: new FormControl(),
    email: new FormControl(),
    senha: new FormControl(),
  });

  // construtor
  constructor(private servicoUsuario: ApiUsuarios) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Voce deve inser um Email valido..');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Email não é valido ');
    } else {
      this.errorMessage.set('');
    }
  }
  //============================================================================
  //Metodo para selecionar todos os usuarios da API
  listar(): void {
    this.servicoUsuario.listar().subscribe((usuario) => (this.vetor = usuario));
  }

  //============================================================================
  //ngOnInit - Executa este metodo apos o componente ser montado
  ngOnInit(): void {
    this.listar();
  }

  //============================================================================
  // Metodo para cadastrar usuarios
  cadastrar(): void {
    // Criar um novo objeto nome objDados
    let objDados = { ...this.formularioUsuario.value }; // Copia todas as caracteristicas do nosso formulario reativo (via spred operator).
    delete objDados.id; // Remove o id, para que nossa API receba um objeto contendo apenas o nome e a cidade.

    // Realizar a requisicão de cadastro (POST) e atualizar o vetor
    this.servicoUsuario
      .cadastrar(objDados)
      .subscribe((usuario) => (this.vetor = [...this.vetor, usuario]));

    // Limpar o formulÃ¡rio
    this.formularioUsuario.reset();
  }

  //============================================================================
  // Metodo para alterar dados
  alterar(): void {
    this.servicoUsuario
      .alterar(this.formularioUsuario.value)
      .subscribe((usuario) => {
        // Obter o i­ndice da usuario alterado no vetor (variavel: idxUsuarioAlterado)
        const idxUsuarioAlterado = this.vetor.findIndex(
          (objUsuario) => objUsuario['id'] === usuario.id,
        );

        // Atualizar valor do vetor
        // this.vetor [idxUsuarioAlterado] = usuario;
        this.vetor = [...this.vetor];

        // Visibilidade dos botÃµes e limpeza dos campos
        this.cancelar();
      });
  }

  //============================================================================
  // Metodo para selecionar uma pessoa especÃ­fica
  selecionarUsuario(id: string): void {
    this.servicoUsuario.selecionarUsuario(id).subscribe((usuario) => {
      // Disponibiliza um objeto com as caracterÃ­sticas: id, nome,funcao,email e
      // senha para o nosso formulario reativo
      this.formularioUsuario.patchValue(usuario);

      // Visibilidade dos botÃµes
      this.btnCadastrar = false;
    });
  }
  //============================================================================
  // Metodo para cancelar as alteraçoes e remocoes
  cancelar(): void {
    this.formularioUsuario.reset();
    this.btnCadastrar = true;
  }

  //============================================================================
  // Metodo para remover usuarios
  remover(): void {
    this.servicoUsuario
      .remover(this.formularioUsuario.value.id)
      .subscribe((usuario) => {
        // Obter o Ã­ndice da pessoa removida no vetor
        const idxUsuarioRemovido = this.vetor.findIndex(
          (obj) => obj['id'] === usuario.id,
        );

        // Efetuar a remoÃ§Ã£o no vetor
        this.vetor.splice(idxUsuarioRemovido, 1);

        // Forçar a atualização do vetor (para exibir corretamente na tabela)
        this.vetor = [...this.vetor];

        // Visibilidade dos botoes e limpeza dos campos
        this.cancelar();
      });
  }
}
