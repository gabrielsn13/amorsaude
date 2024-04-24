import { Component } from '@angular/core';
import { Teste, TesteService } from './services/teste.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amorsaude-frontend';

  valueFromBeckend$: Observable<Teste> = this.testeService.getUserById(1);

  constructor(private testeService: TesteService){

  }
}
