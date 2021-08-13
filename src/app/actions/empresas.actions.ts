import { Action } from '@ngrx/store';

import { Empresa } from '../models/empresa';

export const DASHBOARD_EMPRESA = '[Empresas] Dashboard Empresa';
export const LOAD_DASHBOARD_EMPRESA_SUCCESS = '[Empresas] Load Dashboard Empresa Success';
export const LOAD_DASHBOARD_EMPRESA_FAILURE = '[Empresas] Load Dashboard Empresa Failure';

export class DashboardEmpresa implements Action {
    readonly type = DASHBOARD_EMPRESA;
}

export class LoadDashboardEmpresaFailure implements Action {
    readonly type = LOAD_DASHBOARD_EMPRESA_FAILURE;
}

export class LoadDashboardEmpresaSuccess implements Action {
    readonly type = LOAD_DASHBOARD_EMPRESA_SUCCESS;
    constructor(public listaempresas: Empresa[]) { }
}



export type EmpresasActions =
    DashboardEmpresa |
    LoadDashboardEmpresaSuccess |
    LoadDashboardEmpresaFailure;
