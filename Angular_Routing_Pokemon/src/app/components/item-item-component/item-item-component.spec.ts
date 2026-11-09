import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ItemItemComponent } from './item-item-component';

describe('ItemItemComponent', () => {
  it('should render name and link to detail', async () => {
    await TestBed.configureTestingModule({
      imports: [ItemItemComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(ItemItemComponent);
    fixture.componentRef.setInput('item', { id: 1, name: 'master-ball', sprite: 'x.png' });
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('a')?.getAttribute('href')).toBe('/item-detail/1');
    expect(el.querySelector('img')?.getAttribute('src')).toBe('x.png');
  });
});
