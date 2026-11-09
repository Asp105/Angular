import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail-component';

describe('PokemonDetailComponent', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetailComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(PokemonDetailComponent);
    fixture.componentRef.setInput('id', '1');
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
