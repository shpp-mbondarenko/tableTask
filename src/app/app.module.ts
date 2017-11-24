import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrBlockComponent } from './tr-block/tr-block.component';
import { TdBlockComponent } from './td-block/td-block.component';


@NgModule({
  declarations: [
    AppComponent,
    TrBlockComponent,
    TdBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
