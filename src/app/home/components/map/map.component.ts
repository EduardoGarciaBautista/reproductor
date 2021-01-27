import {Component, OnInit} from '@angular/core';
import {HandleLocation} from '@utils/HandleLocation';
import {ERROR_GET_LOCATION} from '@constants/MessageConstant';
import {AppState} from '@reducers/app.reducer';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {


    apiLoaded = false;

    options: google.maps.MapOptions = {
        center: {lat: 0, lng: 0},
        zoom: 15
    };

    markerOptions: google.maps.MarkerOptions = {draggable: false};

    markerPositions: google.maps.LatLngLiteral[] = [];

    constructor(private store: Store<AppState>) {


        this.store.select('map').subscribe(({scriptLoaded}) => {

            setTimeout(() => {
                this.apiLoaded = scriptLoaded;
            }, 200);
        });

    }

    ngOnInit(): void {
        this.setLocation();

    }

    setLocation(): void {
        HandleLocation.getLocation()
            .then(result => {
                console.log(result);
                this.options.center = {...result};
                this.markerPositions.push(result);
            })
            .catch(er => {
                console.warn(ERROR_GET_LOCATION, er.message);
            });
    }

}
