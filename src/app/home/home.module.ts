import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './pages/home/home.component';
import {MapComponent} from './components/map/map.component';
import {PlayerModule} from '../player/player.module';

import {GoogleMapsModule} from '@angular/google-maps';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        MapComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        PlayerModule,
        GoogleMapsModule,
        SharedModule
    ]
})
export class HomeModule {
}
