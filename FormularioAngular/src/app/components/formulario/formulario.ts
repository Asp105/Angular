import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    nif: '',
    email: '',
    telefono: '',
    sexo: '',
    comoConocio: '',
    password: '',
    confirmPassword: ''
  };

  opcionesConocio: string[] = [
    'Buscando en Google',
    'A través de un amigo',
    'Por mi profesor'
  ];

  onSubmit(form: NgForm): void {
    if (form.invalid || this.usuario.password !== this.usuario.confirmPassword) {
      return;
    }

    console.log('Formulario enviado con éxito:', this.usuario);
  }
}