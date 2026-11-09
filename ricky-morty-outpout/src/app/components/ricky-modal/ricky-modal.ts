import { Component, inject, Input } from '@angular/core';
import { RickyDetailResponse } from '../../interfaces/ricky-detail-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-ricky-modal',
  styleUrl: './ricky-modal.css',
  templateUrl: './ricky-modal.html',
})
export class RickyModal {

    // STEP11: hemos declarado un componente para el modal que se va a abrir cuando pulse en el detalle de un Pokémon
  // para poder hacer uso de la clase que controlan los modales en angular bootstrap, tengo que declarar mediante inyección de dependencia la siguiente variable.
  activeModal = inject(NgbActiveModal);

  // Además declaro como parámetro de entrada al modal el objeto PokemonDetailResponse
  @Input() rickyDetail: RickyDetailResponse | undefined;
}
