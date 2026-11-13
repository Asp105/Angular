import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-blog-post-page',
  styleUrl: './blog-post-page.css',
  templateUrl: './blog-post-page.html',
})
export class BlogPostPage {

  especie = ["Perro", "Gato", "Ave", "Otro"];
  sexo = ["Macho", "Hembra"];

  registerForm = new FormGroup({

    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern( /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern( /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nombreMascota: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern( /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    especie: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
    raza: new FormControl('', [Validators.maxLength(40)]),
    edad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
    pesoKg: new FormControl('', [Validators.required, Validators.min(0.1), Validators.max(90)]),
    numMicrochip: new FormControl('', [Validators.required, Validators.pattern(/^\d{15}$/)]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]),
    primeraVisita: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),
    politicaPrivacidad: new FormControl(false, [Validators.requiredTrue]),
    recordatorios: new FormControl(false)
  });
  

  isInvalidField(field: string) {
    return this.registerForm.get(field)?.invalid && (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

  checkPassword(regex: string) {
    return new RegExp(regex).test(this.registerForm.get('password')?.value || '');
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
  }

  }

