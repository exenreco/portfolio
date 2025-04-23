import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchComponent } from './search/search.component';
import { ResumeComponent } from './resume/resume.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const routes: Routes = [
  // public routes...
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search', component: SearchComponent, title: 'Search Results' }, // search routs
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // no query redirect to home
  { path: '**', component: NotfoundComponent } // wildcard / 404:
];
