import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path: ''
    },
    {
        component: ContactComponent,
        path: 'contact'
    },
    {
        component: AboutComponent,
        path: 'about'
    }
];
