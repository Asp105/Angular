import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './components/formulario/formulario';

@Component({
  imports: [RouterOutlet, Formulario],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FormularioAngular');
}
