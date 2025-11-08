import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        // Carga Perezosa: Apunta al archivo del módulo y exporta la clase del módulo
        loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
