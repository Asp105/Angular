import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BerryItemComponent } from './berry-item-component';

describe('BerryItemComponent', () => {
  it('should render name and link to detail', async () => {
    await TestBed.configureTestingModule({
      imports: [BerryItemComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(BerryItemComponent);
    fixture.componentRef.setInput('berry', { id: 1, name: 'cheri', sprite: 'x.png' });
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a')?.getAttribute('href')).toBe('/berry-detail/1');
    expect(el.querySelector('img')?.getAttribute('src')).toBe('x.png');
  });
});
