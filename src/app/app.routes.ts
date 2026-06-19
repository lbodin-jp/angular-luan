import { Routes } from '@angular/router';
import { Accueil } from '../pages/accueil/accueil';
import { Recent } from '../pages/recent/recent';

export const routes: Routes = [
    { 
        path: '', 
        loadComponent: async() => 
        import('../pages/accueil/accueil').then(({ Accueil }) => Accueil) 
        
        
    },{
        path: 'recent',
        loadComponent: async() =>
            import('../pages/recent/recent').then(({ Recent }) => Recent)
    },{
        path: 'favoris',
        loadComponent: async() =>
            import('../pages/favoris/favoris').then(({ Favoris }) => Favoris)

    },{
        path: '**',
        redirectTo:''
    }
];
