import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rotas',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './rotas.html',
  styleUrl: './rotas.css',
})
export class Rotas {
  //ngOnInit executara assim que o componente for criado
  //ngOnInit(): void;
}
