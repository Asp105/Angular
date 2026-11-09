import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { BerryDetailComponent } from './berry-detail-component';

describe('BerryDetailComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [BerryDetailComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(BerryDetailComponent);
    fixture.componentRef.setInput('id', '1');
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
