import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ScrollService} from './services/scroll.service';
import { SharedModule } from './shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import { NguiMapModule} from '@ngui/map';

@NgModule({
  providers: [
    ScrollService
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyClZkV6u8E5VgULIpqpP5KkCzKhYKi0DZk'})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
