import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarwarsModal } from './starwars-modal';

describe('StarwarsModal', () => {
  let component: StarwarsModal;
  let fixture: ComponentFixture<StarwarsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarwarsModal],
    }).compileComponents();

    fixture = TestBed.createComponent(StarwarsModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
