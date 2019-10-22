import { Component, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';

export class Lista {
  Codigo: number;
  Item: string;
  Valor: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicos';
  itens: string[] = ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05'];
  valores: number[] = [22.5, 10.00, 55.00, 2.50, 45.99];
  lista: Lista[] = [];

  constructor() {
    for (let i = 0; i < this.itens.length; i++) {
      this.lista.push({
        Codigo: i + 1,
        Item: this.itens[i],
        Valor: this.valores[i]
      });
    }
  }
}
