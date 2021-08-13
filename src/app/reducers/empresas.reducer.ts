import * as empresasActions from '../actions/empresas.actions';

import { Empresa } from '../models/empresa';

export const empresasFeatureKey = 'empresas';

export interface State {
    empresas: Empresa[];
}

export const initialState: State = {
    empresas: []
};

export function reducer(state = initialState, action: empresasActions.EmpresasActions): State {


    switch (action.type) {

        case empresasActions.DASHBOARD_EMPRESA:
            return state;

        case empresasActions.LOAD_DASHBOARD_EMPRESA_SUCCESS:
            return { ...state, empresas: action.listaempresas };

        case empresasActions.LOAD_DASHBOARD_EMPRESA_FAILURE:
            return state;

        default:
            return state;
    }

}
