import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepicker, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';


@Component({
  imports: [ReactiveFormsModule, NgbInputDatepicker],
  selector: 'app-blog-post',
  styleUrl: './blog-post.css',
  templateUrl: './blog-post.html',
})
export class BlogPost {

   formulario = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
    tags: new FormControl(''),
    email: new FormControl(''),
    publishNow: new FormControl(true),
    publishDate: new FormControl(''),
  });

categories = ['Tecnología', 'Diseño', 'Programación', 'Novedades'];

  onSubmit(): void {
    console.log(this.formulario.value);
  }
}
