import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        routing,
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
