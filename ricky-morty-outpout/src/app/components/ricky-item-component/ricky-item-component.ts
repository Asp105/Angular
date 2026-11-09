
import { Component, input, output } from '@angular/core';
import { Ricky } from '../../interfaces/ricky-list-response';


@Component({
  imports: [],
  selector: 'app-ricky-item-component',
  styleUrl: './ricky-item-component.css',
  templateUrl: './ricky-item-component.html',
})
export class RickyItemComponent {

  ricky = input<Ricky>();

  // STEP6: declaramos también una propiedad de tipo output que nos va a permitir lanzar un evento personalizado, es decir, custom para detectar en el componente padre cuando se ha hecho clic en el Pokémon
  rickyClicked = output<string>();
  id: string = '';

  getRickyId() {
    this.id = String(this.ricky()!.id);
    return this.id;
  }

  // STEP8: defino el evento que gestiona haber hecho clic sobre el componente Pokémon en este componente Hijo
  // y este evento, lo que tiene que hacer es emitir un nuevo valor por el output.  
  emitRickyClicked() {
    const id = this.getRickyId();
    this.rickyClicked.emit(id);
  }
}
