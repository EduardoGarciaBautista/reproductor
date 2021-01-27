import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@reducers/app.reducer';
import {SongModel} from '@models/song.model';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
})
export class PlayListComponent implements OnInit {

  playList: SongModel[] = [];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('playList').subscribe(({playList}) => {
      this.playList = playList;
    });
  }

}
