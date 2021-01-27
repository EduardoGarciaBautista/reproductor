import {Component} from '@angular/core';
import {APY_KEY, GOOGLE_API} from '@environments/environment';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {AppState} from '@reducers/app.reducer';
import {loadingScript, scriptLoaded} from '@actions/map.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(httpClient: HttpClient,
                private store: Store<AppState>) {
        this.store.dispatch(loadingScript());
        httpClient.jsonp(`${GOOGLE_API}${APY_KEY}`, 'callback')
            .pipe(
                map(() => true),
                catchError(() => of(false)),
            ).subscribe(result => {
            this.store.dispatch(scriptLoaded({value: result}));
        });
    }

}
