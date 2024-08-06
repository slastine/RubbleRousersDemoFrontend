import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatDesignComponent } from './cat-design/cat-design.component';
import { ParentDisplayComponent } from './parent-display/parent-display.component';
import { KittenGridComponent } from './kitten-grid/kitten-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CatDesignComponent,
    ParentDisplayComponent,
    KittenGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
