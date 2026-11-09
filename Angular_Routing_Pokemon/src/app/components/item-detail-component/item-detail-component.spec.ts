import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ItemDetailComponent } from './item-detail-component';

describe('ItemDetailComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDetailComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(ItemDetailComponent);
    fixture.componentRef.setInput('id', '1');
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
