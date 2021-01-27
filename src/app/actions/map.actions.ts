import {createAction, props} from '@ngrx/store';


export const loadingScript = createAction('[Loading Script]');

export const scriptLoaded = createAction('[Script Loaded]', props<{ value: boolean }>());

