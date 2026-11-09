import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { StarwarsDetailResponse } from '../../interfaces/starwars-detail-response';

@Component({
  imports: [],
  selector: 'app-starwars-modal',
  styleUrl: './starwars-modal.css',
  templateUrl: './starwars-modal.html',
})
export class StarwarsModal {

  activeModal = inject(NgbActiveModal);

  @Input() characterDetail: StarwarsDetailResponse | undefined
}
