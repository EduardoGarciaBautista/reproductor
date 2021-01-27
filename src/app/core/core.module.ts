import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayListService} from './services/play-list.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [PlayListService]
})
export class CoreModule {
}
