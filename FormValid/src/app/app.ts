import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterFormPage } from './components/register-form-page/register-form-page';

@Component({
  imports: [RouterOutlet, RegisterFormPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FormValid');
}
