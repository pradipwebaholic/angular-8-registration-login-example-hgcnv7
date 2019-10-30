import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { AlertComponent } from './_components';
import {SharedModule} from './shared/shared.module';
import { AppService } from './_services/app.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        AlertComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };