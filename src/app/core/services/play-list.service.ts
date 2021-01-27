import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SongModel} from '@models/song.model';
import {HOST, ID, LOCALE, RAPPI_KEY, URL_API} from '@environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PlayListService {

    constructor(private  http: HttpClient) {
    }

    getPlayList(): Observable<SongModel[]> {

        return this.http.get<{ tracks: SongModel[] }>(URL_API, {
            params: {
                id: ID,
                locale: LOCALE
            },
            headers: {
                'x-rapidapi-key': RAPPI_KEY,
                'x-rapidapi-host': HOST
            }
        })
            .pipe(
                map((result: any) => result.tracks)
            );
    }
}
