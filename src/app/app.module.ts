import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StreamerBoxComponent } from './streamer-box/streamer-box.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamerBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
