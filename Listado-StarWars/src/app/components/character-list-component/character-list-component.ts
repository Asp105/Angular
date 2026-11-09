import { Component, inject, OnInit, signal } from '@angular/core';
import { CharacterItemComponent } from '../character-item-component/character-item-component';
import { StarwarsService } from '../../services/starwars-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from '../../interfaces/starwars-list-response';
import { StarwarsModal } from '../starwars-modal/starwars-modal';

@Component({
  imports: [CharacterItemComponent],
  selector: 'app-character-list-component',
  styleUrl: './character-list-component.css',
  templateUrl: './character-list-component.html',
})
export class CharacterListComponent implements OnInit{

  starwarsService = inject(StarwarsService)
  starwarsList = signal<Character[]>([])
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.starwarsService.getAll().subscribe(resp => {
      this.starwarsList.set(resp.results);
    });
  }

  openStarWarsModal(id: string) {
    this.starwarsService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(StarwarsModal);
      modalRef.componentInstance.characterDetail = resp;
    });
  }
  

}
