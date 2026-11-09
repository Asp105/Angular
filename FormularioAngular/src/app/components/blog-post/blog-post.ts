import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-blog-post',
  styleUrl: './blog-post.css',
  templateUrl: './blog-post.html',
})
export class BlogPost {

  // Instancias independientes de FormControl
  title = new FormControl('');
  description = new FormControl('');
  category = new FormControl('');
  tags = new FormControl('');
  email = new FormControl('');
  publishNow = new FormControl(true);
  publishDate = new FormControl('');

  categories = ['Tecnología', 'Diseño', 'Programación', 'Novedades'];

  onSubmit(): void {
    const postData = {
      title: this.title.value,
      description: this.description.value,
      category: this.category.value,
      tags: this.tags.value,
      email: this.email.value,
      publishNow: this.publishNow.value,
      publishDate: this.publishNow.value ? null : this.publishDate.value
    };

    console.log(postData);
  }
}

