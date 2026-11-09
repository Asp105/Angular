import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktaiItemComponent } from './cocktai-item-component';

describe('CocktaiItemComponent', () => {
  let component: CocktaiItemComponent;
  let fixture: ComponentFixture<CocktaiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktaiItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktaiItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
