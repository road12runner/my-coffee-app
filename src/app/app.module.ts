import { ListComponent } from './list/list.component';
import { DataService } from './data.serive';
import { GeoLocationService } from './geo-location.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import 'hammerjs';
import { CoffeeComponent } from './coffee/coffee.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [GeoLocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
