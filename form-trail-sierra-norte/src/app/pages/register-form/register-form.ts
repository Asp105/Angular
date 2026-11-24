import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {

  registerForm = new FormGroup({

    nombreCompleto: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    email: new FormControl('', [Validators.required, Validators.email] ),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^(\+34 ?)?[6-9]\d{8}$/)]),
    contraseña: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]),
    modalidad: new FormControl('', [Validators.required]),
    categoria: new FormControl('', [Validators.required]),
    edad: new FormControl(Number, [Validators.required, Validators.min(18), Validators.max(85)]),
    codFed: new FormControl('', [Validators.required, Validators.pattern(/^FED-\d{4}$/)]),
    alergias: new FormControl('', [Validators.maxLength(200)]),
    gps: new FormControl('', [Validators.requiredTrue])
})


  isInvalidField(field: string) {
    return this.registerForm.get(field)?.invalid && (this.registerForm.get(field)?.dirty || this.registerForm.get(field)?.touched);
  }

  //checkPassword(regex: string) {
    //return new RegExp(regex).test(this.registerForm.get('password')?.value || '');
  //}

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    console.log(this.registerForm.value);
  }

}

