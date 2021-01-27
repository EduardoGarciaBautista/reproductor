import {Action, createReducer, on} from '@ngrx/store';
import {isLoading, stopLoading} from '@actions/ui.actions';

export interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false
};

const _uiReducer = createReducer(initialState,
    on(isLoading, state => ({...state, isLoading: true})),
    on(stopLoading, state => ({...state, isLoading: false}))
);


export function uiReducer(state: State | undefined, action: Action): State {
    return _uiReducer(state, action);
}
