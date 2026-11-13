import { Routes } from '@angular/router';
import { BlogPostPage } from './components/blog-post-page/blog-post-page';
import { PageNotFound } from './errors/page-not-found/page-not-found';

export const routes: Routes = [
    
    {path: 'BlogPostPage', component: BlogPostPage},
    {path: '**', component: PageNotFound}
];
