import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {SongModel} from '@models/song.model';
import {AppState} from '@reducers/app.reducer';

@Injectable({
    providedIn: 'root'
})
export class PaginatorService {

    allItems: SongModel[] = [];

    constructor(private store: Store<AppState>) {
        this.store.select('playList').subscribe(({playList}) => {
            this.allItems = playList;
        });
    }

    getNext(actual: SongModel): SongModel {
        const index = this.allItems.findIndex(item => item.key === actual.key);
        if (index === this.allItems.length - 1) {
            return actual;
        } else {
            return this.allItems[index + 1];
        }
    }

    getPreview(actual: SongModel): SongModel {
        const index = this.allItems.findIndex(item => item.key === actual.key);
        if (index === 0) {
            return actual;
        } else {
            return this.allItems[index - 1];
        }
    }

    getCircular(actual: SongModel): SongModel {
        const index = this.allItems.findIndex(item => item.key === actual.key);
        if (index === this.allItems.length - 1) {
            return this.allItems[0];
        } else {
            return this.allItems[index + 1];
        }
    }

    setFirstSong(): SongModel | null {
        if (this.allItems.length) {
            return this.allItems[0];
        }
        return null;
    }
}
