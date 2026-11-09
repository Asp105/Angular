import { Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list-component/character-list-component';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
 {path: 'starwars-list', component: CharacterListComponent},
 {path: '', redirectTo: 'starwars-list', pathMatch: 'full'},
 {path: '**', component: PageNotFound}
];
