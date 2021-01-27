import {SongModel, StatusSong} from '../models/song.model';
import {Action, createReducer, on} from '@ngrx/store';
import {nextSong, previewSong, setActiveSong, setPause, setPlaying, unsetActiveSong} from '../actions/player.actions';

export interface State {
    active: SongModel | null;
    status: StatusSong;
}

const initialState: State = {
    active: null,
    status: StatusSong.stop
};

const _playerReducer = createReducer(initialState,
    on(setActiveSong, (state, {song}) => ({...state, active: song})),
    on(unsetActiveSong, state => ({...state, active: null})),
    on(nextSong, (state, {song}) => ({active: song, status: StatusSong.stop})),
    on(previewSong, (state, {song}) => ({active: song, status: StatusSong.stop})),
    on(setPlaying, state => ({...state, status: StatusSong.playing})),
    on(setPause, state => ({...state, status: StatusSong.pause}))
);


export function playerReducer(state: State | undefined, action: Action): State {
    return _playerReducer(state, action);
}
