import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPost } from './components/blog-post/blog-post';

@Component({
  imports: [RouterOutlet, BlogPost],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FormGroupAngular');
}
