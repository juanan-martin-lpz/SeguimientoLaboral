import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload', urlUpdateStrategy: 'eager' });
