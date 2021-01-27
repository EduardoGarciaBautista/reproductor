import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@reducers/app.reducer';
import {SongModel} from '@models/song.model';
import {SONG_INITIAL_STATE} from '@constants/SongConstant';
import {nextSong, previewSong, unsetActiveSong} from '@actions/player.actions';
import {PaginatorService} from '@core/services/paginator.service';
import {interval, Subscription} from 'rxjs';
import {DEFAULT_IMAGE} from '@environments/environment';


@Component({
    selector: 'app-music-player',
    templateUrl: './music-player.component.html',
})
export class MusicPlayerComponent implements OnInit, OnDestroy {

    @ViewChild('audioElement', {read: ElementRef}) audio: ElementRef = new ElementRef<any>('');

    defaultImage = DEFAULT_IMAGE;

    activeSong: SongModel = SONG_INITIAL_STATE;

    audioSrc = '';

    isPlaying = false;

    subscriptions: Subscription[] = [];

    interval = interval(1000);


    constructor(private  store: Store<AppState>,
                private paginatorService: PaginatorService) {
    }

    ngOnInit(): void {

        this.subscriptions.push(this.store.select('player').subscribe(result => {
            if (result.active) {
                this.activeSong = result.active;
                this.audioSrc = result.active.hub.actions[1].uri;
                this.subscriptions[1]?.unsubscribe();
            }
            if (this.canExecuteAction()) {
                this.isPlaying = true;
            }
        }));
    }


    play(): void {
        if (this.canExecuteAction()) {
            this.audio.nativeElement.play();
            this.isPlaying = true;
        } else {
            const song = this.paginatorService.setFirstSong();
            if (song) {
                this.store.dispatch(nextSong({song}));
            }
        }
    }

    pause(): void {
        if (this.canExecuteAction()) {
            this.audio.nativeElement.pause();
            this.isPlaying = false;
        }
    }

    next(): void {
        this.store.dispatch(nextSong({song: this.paginatorService.getNext(this.activeSong)}));
    }

    nextCircular(): void {
        this.store.dispatch(nextSong({song: this.paginatorService.getCircular(this.activeSong)}));
    }

    preview(): void {
        this.store.dispatch(previewSong({song: this.paginatorService.getPreview(this.activeSong)}));
    }

    canExecuteAction(): boolean {
        return this.audio && this.audio.nativeElement && this.audioSrc.length > 0;
    }

    unsubscribeAll(): void {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

    ngOnDestroy(): void {
        this.store.dispatch(unsetActiveSong());
        this.unsubscribeAll();
    }

}
