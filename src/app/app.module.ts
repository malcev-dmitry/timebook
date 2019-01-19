import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    [BrowserModule,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      BrowserAnimationsModule,
      MatCheckboxModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
