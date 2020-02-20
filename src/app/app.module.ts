import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Virtual Scroll
import { ScrollingModule } from '@angular/cdk/scrolling';

// Drag
import { DragDropModule } from '@angular/cdk/drag-drop';

// Http para acceder y consumir peticiones res
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
