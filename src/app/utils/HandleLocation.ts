import {LocationModel} from '@models/location.model';

export class HandleLocation {
    static getLocation = (): Promise<LocationModel> => {
        return new Promise((resolve, reject) => {
            try {
                navigator.geolocation.getCurrentPosition(({coords}) => {
                    const lng = coords.longitude;
                    const lat = coords.latitude;
                    resolve({lat, lng});
                });
            } catch (e) {
                reject({lat: 0, lng: 0});
            }
        });
    };
}
