import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@reducers/app.reducer';
import {SongModel} from '@models/song.model';
import {isLoading, stopLoading} from '@actions/ui.actions';
import {PlayListService} from '@core/services/play-list.service';
import {setPlayList} from '@actions/play-list.actions';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {

    playList: SongModel[] = [];

    isLoading = true;

    constructor(private store: Store<AppState>,
                private playListService: PlayListService) {
    }


    ngOnInit(): void {
        this.store.dispatch(isLoading());
        this.store.select('ui').subscribe(changes => {
            this.isLoading = changes.isLoading;
        });
        // this.store.dispatch(setPlayList({data: dataSet.tracks}));
        this.playListService.getPlayList().subscribe(result => {
            console.log(result);
            this.store.dispatch(setPlayList({data: result}));
            this.store.dispatch(stopLoading());
        });
    }

}
