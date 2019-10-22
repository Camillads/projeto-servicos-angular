import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  title = 'servicos';
  itens: string[] = ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05'];
  itensCat01 = ['Item 011', 'Item 021', 'Item 031', 'Item 041', 'Item 051'];
  itensCat02 = ['Item 012', 'Item 022', 'Item 032', 'Item 042', 'Item 052'];
  itensCat03 = ['Item 013', 'Item 023', 'Item 033', 'Item 043', 'Item 053'];
  valores: number[] = [22.5, 10.00, 55.00, 2.50, 45.99];
  lista: Lista[] = [];
  itensSelecionados: Lista[] = [];
  total = 0;
  categoria = 1;

  constructor() { }

  ngOnInit() {
    this.preencherItens();
  }

  obterItem(item: Lista) {
    this.itensSelecionados.push(item);
    this.total = this.total + item.Valor;
  }

  excluir(item: Lista) {
    const posicao = this.itensSelecionados.indexOf(item);
    this.itensSelecionados.splice(posicao, 1);
    this.total = this.total - item.Valor;
  }

  cat01() {
    this.categoria = 1;
    this.itens = [];
    this.lista = [];
    this.itens = this.itensCat01;
    this.preencherItens();
  }

  cat02() {
    this.categoria = 2;
    this.itens = [];
    this.lista = [];
    this.itens = this.itensCat02;
    this.preencherItens();
  }

  cat03() {
    this.categoria = 3;
    this.itens = [];
    this.lista = [];
    this.itens = this.itensCat03;
    this.preencherItens();
  }

  preencherItens() {
    for (let i = 0; i < this.itens.length; i++) {
      this.lista.push({
        Codigo: i + 1,
        Item: this.itens[i],
        Valor: this.valores[i]
      });
    }
  }
}
