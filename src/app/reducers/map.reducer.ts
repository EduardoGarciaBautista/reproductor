import {Action, createReducer, on} from '@ngrx/store';
import {loadingScript, scriptLoaded} from '@actions/map.actions';

export interface State {
    loadingScript: boolean;
    scriptLoaded: boolean;
}

const initialState: State = {
    loadingScript: false,
    scriptLoaded: false,
};


const _mapReducer = createReducer(initialState,
    on(loadingScript, state => ({...state, loadingScript: true})),
    on(scriptLoaded, (state, {value}) => ({...state, scriptLoaded: value})));

export function mapReducer(state: State | undefined, action: Action): State {
    return _mapReducer(state, action);
}
