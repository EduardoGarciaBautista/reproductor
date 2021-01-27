import {Component, Input, OnInit} from '@angular/core';
import {SongModel} from '../../../models/song.model';
import {Store} from '@ngrx/store';
import {setActiveSong} from '../../../actions/player.actions';
import {deleteSong} from '../../../actions/play-list.actions';
import {DEFAULT_IMAGE} from '../../../../environments/environment';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {

    @Input() song: SongModel | null = null;

    defaultImage = DEFAULT_IMAGE;

    constructor(private store: Store) {
    }

    ngOnInit(): void {
    }

    setActive(): void {
        if (this.song) {
          this.store.dispatch(setActiveSong({song: this.song}));
        }
    }

    deleteSong(): void {
        if (this.song) {
            this.store.dispatch(deleteSong({uid: this.song.key}));
        }
    }
}
