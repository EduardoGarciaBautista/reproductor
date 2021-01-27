import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';


import {StoreModule} from '@ngrx/store';
import {appReducer} from '@reducers/app.reducer';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment, firebaseConfig} from '@environments/environment';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 50, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),

        HttpClientModule,
        HttpClientJsonpModule,
        SharedModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
