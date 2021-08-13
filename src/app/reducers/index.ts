import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';


import { environment } from '../../environments/environment';


import * as fromEmpresas from './empresas.reducer';

export interface AppState {
    empresas: fromEmpresas.State;
}

export const reducers: ActionReducerMap<AppState> = {
    empresas: fromEmpresas.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
