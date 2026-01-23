import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelo/Usuarios';
//import { Tabela } from '../tabela/tabela';
import { Formulario } from '../formulario/formulario';

@Component({
  selector: 'app-menu-geral',
  imports: [CommonModule, Formulario],
  templateUrl: './menu-geral.html',
  styleUrl: './menu-geral.css',
})
//

// Vetor para armazenar usuario usuarios:Usuario[] = [];
export class MenuGeral {
  // Vetor para armazenar usuario
  usuarios: Usuario[] = [];
  // MÃ©todo para cadastrar usuaio
  adicionarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
  //variavel da sistuacao do acesso ao sistema
  situacaoParamentro: string = '';

  //contrutor
  constructor(private rota: ActivatedRoute) {}
  // usar o nginit para extrair o paramentro da rota
  ngOnInit(): void {
    this.situacaoParamentro = this.rota.snapshot.paramMap.get('mensagem') || '';
  }

  // defino as variaveis para usar como parametro igual a linkage e uso no html do componente
  //nome: string = 'Lourenco Sebastiao';
  //media: number = 7;
  // defino a funcao mensagem para usar como paramentro  igual a linkage e uso no html do  componente
  //mensagem(): string {
  //  return 'sejam bem vindo';
  //}
  // defino o objeto a ser usado, no caso dados do usuario com 2 informaçoes
  //usuario = { user: 'gerente', senha: 12345 };
  /*

[PIPES NATIVOS DO ANGULAR VERSÃO 20]
1. currency: Formata um valor numérico como uma moeda.
2. date: Formata uma data de acordo com o formato especificado.
3. decimal: Formata um número com precisão decimal.
4. json: Converte um objeto JavaScript em uma string JSON.
5. lowercase: Converte o texto para minúsculas.
6. uppercase: Converte o texto para maiúsculas.
7. percent: Formata um número como uma porcentagem.
8. slice: Extrai uma parte de um array ou string.
9. i18nPlural: Exibe o plural de um valor baseado em regras de pluralização.
10. i18nSelect: Seleciona uma opção de string com base no valor de um parâmetro.
11. async: Assina observáveis e exibe os valores emitidos.
*/
  // fim
}
