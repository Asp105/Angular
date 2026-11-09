import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list-component/pokemon-list-component';
import { PokemonDetailComponent } from './components/pokemon-detail-component/pokemon-detail-component';
import { BerryListComponent } from './components/berry-list-component/berry-list-component';
import { BerryDetailComponent } from './components/berry-detail-component/berry-detail-component';
import { ItemListComponent } from './components/item-list-component/item-list-component';
import { ItemDetailComponent } from './components/item-detail-component/item-detail-component';

export const routes: Routes = [
  { path: 'pokemon-list', component: PokemonListComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  { path: 'berry-list', component: BerryListComponent },
  { path: 'berry-detail/:id', component: BerryDetailComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/pokemon-list' },
];
