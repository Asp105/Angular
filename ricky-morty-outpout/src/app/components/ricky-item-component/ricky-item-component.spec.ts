import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickyItemComponent } from './ricky-item-component';

describe('RickyItemComponent', () => {
  let component: RickyItemComponent;
  let fixture: ComponentFixture<RickyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickyItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RickyItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
