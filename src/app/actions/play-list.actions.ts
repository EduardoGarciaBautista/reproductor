import {createAction, props} from '@ngrx/store';
import {SongModel} from '../models/song.model';

export const setPlayList = createAction('[Play List] Set Play List', props<{data: SongModel[] }>());

export const unsetPlayList = createAction('[Play List] Unset Play List');

export const deleteSong = createAction('[Play List] Delete From Play List', props<{ uid: string }>());

