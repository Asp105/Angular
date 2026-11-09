import { TestBed } from '@angular/core/testing';
import { PagerComponent } from './pager-component';

describe('PagerComponent', () => {
  it('should emit the new offset', async () => {
    await TestBed.configureTestingModule({ imports: [PagerComponent] }).compileComponents();
    const fixture = TestBed.createComponent(PagerComponent);
    fixture.componentRef.setInput('offset', 0);
    fixture.componentRef.setInput('limit', 24);
    fixture.componentRef.setInput('count', 100);
    await fixture.whenStable();
    let emitted = -1;
    fixture.componentInstance.pageChange.subscribe((o) => (emitted = o));
    fixture.componentInstance.go(2);
    expect(emitted).toBe(24);
    expect(fixture.componentInstance.pages()).toBe(5);
  });
});
