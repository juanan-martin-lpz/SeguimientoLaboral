import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { DashboardEmpresa, LoadDashboardEmpresaSuccess, LoadDashboardEmpresaFailure, EmpresasActionsTypes, EmpresasActions } from '../actions/empresas.actions';

import { EmpresaService } from '../services/empresas.service';

@Injectable()
export class EmpresasEffects {

    @Effect()
    loadDashboard$ = this.actions$.pipe(
        ofType(EmpresasActionsTypes.DashboardEmpresa),
        concatMap(() =>
            /** An EMPTY observable only emits completion. Replace with your own observable API request */
            this.servicioEmpresas.listarEmpresas().pipe(
                map(empresas) => new LoadDashboardEmpresaSuccess({ empresas })),
            catchError(error => of(new LoadDashboardEmpresaFailure({ error }))))
    )
    );



    constructor(
        private actions$: Actions<EmpresasActions>,
        private servicioEmpresas: EmpresaService) { }

}
