import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PlayerRoutingModule} from './player-routing.module';
import {PlayListComponent} from './components/play-list/play-list.component';
import {ListItemComponent} from './components/list-item/list-item.component';
import {PlayerComponent} from './pages/player/player.component';
import {MaterialModule} from '../material/material.module';
import { MusicPlayerComponent } from './components/music-player/music-player.component';


@NgModule({
  declarations: [PlayListComponent, ListItemComponent, PlayerComponent, MusicPlayerComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule
  ]
})
export class PlayerModule {
}
