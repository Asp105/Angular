import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form-page',
  styleUrl: './register-form-page.css',
  templateUrl: './register-form-page.html',
})
export class RegisterFormPage {

  cursos = ['Desarrollo Web con Angular', 'Diseño UX/UI', 'JavaScript Avanzado', 'Bases de Datos'];

  registerForm = new FormGroup({

    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)]),
    dni: new FormControl('', [Validators.required, Validators.pattern(/^([0-9]{8}|[XYZxyz][0-9]{7})[A-Za-z]$/)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^(\+34\s?)?[67][0-9]{8}$/)]),
    username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z][a-zA-Z0-9_]*$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/)]),
    curso: new FormControl('', [Validators.required]),
    horas: new FormControl(null, [Validators.required, Validators.min(2), Validators.max(40)]),
    codigoPostal: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$/)]),
    terminos: new FormControl(false, Validators.requiredTrue)

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
