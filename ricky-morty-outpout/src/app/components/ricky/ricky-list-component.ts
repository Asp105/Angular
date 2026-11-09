import { Component, inject, OnInit, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RickyService } from '../../services/ricky-service';
import { RickyModal } from '../ricky-modal/ricky-modal';
import { RickyItemComponent } from '../ricky-item-component/ricky-item-component';
import { Ricky } from '../../interfaces/ricky-list-response';

@Component({
  imports: [RickyItemComponent],
  selector: 'app-ricky-list-component',
  styleUrl: './ricky-list-component.css',
  templateUrl: './ricky-list-component.html',
})
export class RickyListComponent implements OnInit {

  rickyService = inject(RickyService);
  rickyList = signal<Ricky[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
      this.rickyService.getAll().subscribe(resp => {
        this.rickyList.set(resp.results);
      });
  }


  openRickyModal (id: string) {

    this.rickyService.getOne(id).subscribe(resp => {
      const modalRef = this.modalService.open(RickyModal);
      modalRef.componentInstance.rickyDetail = resp;
    });

  }
}
