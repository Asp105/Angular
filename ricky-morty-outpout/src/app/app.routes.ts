import { Routes } from '@angular/router';
import { RickyListComponent } from './components/ricky/ricky-list-component';
import { EpisodeListComponent } from './components/episode-list-component/episode-list-component';
import { PageNotFoundComponent } from './errors/page-not-found-component/page-not-found-component';

export const routes: Routes = [
    {path: 'ricky-list', component: RickyListComponent },
    {path: '', pathMatch: 'full', redirectTo: '/ricky-list'},
    {path: 'episode-list', component: EpisodeListComponent },
    {path: '**', component: PageNotFoundComponent }
];
