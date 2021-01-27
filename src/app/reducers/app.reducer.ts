import {ActionReducerMap} from '@ngrx/store';
import * as ui from './ui.reducer';
import * as player from './player.reducer';
import * as playList from './play-list.reducer';
import * as map from './map.reducer';

export interface AppState {
    ui: ui.State;
    player: player.State;
    playList: playList.State;
    map: map.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    ui: ui.uiReducer,
    player: player.playerReducer,
    playList: playList.playListReducer,
    map: map.mapReducer
};
