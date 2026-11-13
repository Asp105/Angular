import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostPage } from './components/blog-post-page/blog-post-page';

@Component({
  imports: [RouterOutlet, BlogPostPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PruebaFormValid');
}
