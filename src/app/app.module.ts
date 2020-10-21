import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';


import { AppComponent } from './app.component';
import { MaterialFileUploadComponent } from './material-file-upload/material-file-upload.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [AppComponent, MaterialFileUploadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
