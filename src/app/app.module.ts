import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WheatherMainComponent } from './Components/wheather-main/wheather-main.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WheatherMainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
