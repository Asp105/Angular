import { inject, Service } from '@angular/core';
import { CharacterListresponse } from '../interfaces/character-listresponse';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Service()
export class CharacterService {
private http = inject(HttpClient);

  getAllCharacters(): Observable<CharacterListresponse> {
    return this.http.get<CharacterListresponse>(`https://rickandmortyapi.com/api/character`);
  }
}
