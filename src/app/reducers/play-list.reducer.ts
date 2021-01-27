import {Action, createReducer, on} from '@ngrx/store';
import {SongModel} from '../models/song.model';
import {deleteSong, setPlayList, unsetPlayList} from '../actions/play-list.actions';


export interface State {
    playList: SongModel[];
}

const initialState: State = {
    playList: []
};

const _playListReducer = createReducer(initialState,
    on(setPlayList, (state, {data}) => ({...state, playList: data})),
    on(unsetPlayList, (state) => ({...state, playList: []})),
    on(deleteSong, (state, {uid}) => ({playList: state.playList.filter(item => item.key !== uid)}))
);

export function playListReducer(state: State | undefined, action: Action): State {
    return _playListReducer(state, action);
}
