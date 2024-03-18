import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { InfoComponent } from './info/info.component';
import { ButtonComponent } from './button/button.component';
import { GentlemanComponent } from './gentleman/gentleman.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ButtonComponent,
    GentlemanComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
