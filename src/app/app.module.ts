import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { B1tlComponent } from './b1tl/b1tl.component';
import { B2tlComponent } from './b2tl/b2tl.component';
import { B3tlComponent } from './b3tl/b3tl.component';
import { B4tlComponent } from './b4tl/b4tl.component';
import { B5tlComponent } from './b5tl/b5tl.component';
import { B6tlComponent } from './b6tl/b6tl.component';
import { B7tlComponent } from './b7tl/b7tl.component';
import { B8tlComponent } from './b8tl/b8tl.component';

@NgModule({
  declarations: [
    AppComponent,
    B1tlComponent,
    B2tlComponent,
    B3tlComponent,
    B4tlComponent,
    B5tlComponent,
    B6tlComponent,
    B7tlComponent,
    B8tlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
