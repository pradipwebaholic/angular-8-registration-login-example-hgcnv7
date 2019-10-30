import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule} from './home.routing.module';
import { SharedModule } from './../../shared/shared.module';
import {ObserversModule} from '@angular/cdk/observers';


@NgModule({
  imports: [
    CommonModule, HomeRoutingModule,SharedModule,ObserversModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }