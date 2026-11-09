import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './components/formulario/formulario';
import { BlogPost } from './components/blog-post/blog-post';

@Component({
  imports: [RouterOutlet, Formulario, BlogPost],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FormularioAngular');
}
