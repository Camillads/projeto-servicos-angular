import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicos';
  lista: string[] = ['Item 01', 'Item 02', 'Item 03', 'Item 04', 'Item 05'];
}
