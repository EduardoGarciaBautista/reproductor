import {createAction, props} from '@ngrx/store';
import {SongModel} from '../models/song.model';


export const setActiveSong = createAction('[Player Component] Set Active Song', props<{ song: SongModel }>());

export const unsetActiveSong = createAction('[Player Component] Unset Active Song');

export const nextSong = createAction('[Player Component] Next Song', props<{ song: SongModel }>());

export const previewSong = createAction('[Player Component] Preview Song', props<{ song: SongModel }>());

export const setPlaying = createAction('[Player Component] Set Playing');

export const setPause = createAction('[Player Component] Set Pause');

