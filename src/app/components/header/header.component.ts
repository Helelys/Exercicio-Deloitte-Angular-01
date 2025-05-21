import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  titulo: string = 'Mi Angular';
  nome: string = "";
  textoAqui: string = "";

  listaDeCards: Card[] = [];

  adicionarCard() {
    if (this.nome.trim() !== "") {
      this.listaDeCards.push({ nome: this.nome, concluido: false });
      this.nome = "";
    }
  }

  removerCard(index: number) {
    this.listaDeCards.splice(index, 1);
  }

  concluirCard(index: number) {
    this.listaDeCards[index].concluido = true;
  }

  editarCard(index: number) {
    const card = this.listaDeCards[index];
    if (card) {
      this.nome = card.nome;
      this.removerCard(index);
    }
  }
}

interface Card {
  nome: string;
  concluido: boolean;
}
