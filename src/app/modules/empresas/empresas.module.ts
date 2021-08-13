import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Reducers
import * as fromEmpresa from '../../reducers/empresas.reducer';

// Efectos
import { EmpresasEffects } from '../../effects/empresa.effects';

import { EmpresasRoutingModule } from './empresas-routing.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromEmpresa.empresasFeatureKey, fromEmpresa.reducer),
        EffectsModule.forFeature([EmpresasEffects]),
        EmpresasRoutingModule
    ]
})
export class EmpresasModule { }
