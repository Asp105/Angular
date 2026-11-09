import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ItemService } from './item-service';

describe('ItemService', () => {
  let service: ItemService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(ItemService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map list results to id, name and sprite', () => {
    let result: any;
    service.getAllItems().subscribe((r) => (result = r));
    const req = http.expectOne((r) => r.url.startsWith('https://pokeapi.co/api/v2/item'));
    req.flush({ count: 1, next: null, previous: null, results: [{ name: 'foo', url: 'https://pokeapi.co/api/v2/item/7/' }] });
    expect(result.results[0].id).toBe(7);
    expect(result.results[0].sprite).toContain('githubusercontent');
  });
});
