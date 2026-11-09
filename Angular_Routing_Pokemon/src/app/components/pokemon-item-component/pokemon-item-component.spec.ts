import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PokemonItemComponent } from './pokemon-item-component';

describe('PokemonItemComponent', () => {
  it('should render name and link to detail', async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonItemComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(PokemonItemComponent);
    fixture.componentRef.setInput('pokemon', { id: 1, name: 'bulbasaur', sprite: 'x.png' });
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a')?.getAttribute('href')).toBe('/pokemon-detail/1');
    expect(el.querySelector('img')?.getAttribute('src')).toBe('x.png');
  });
});
