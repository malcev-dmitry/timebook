import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { MatTableModule} from '@angular/material/table';
import { MatButtonModule, MatIconModule, MatSlideToggleModule,
  ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HttpClientModule} from '@angular/common/http';
import { HttpService, ApiService } from './apiService';
import { LoadingComponent } from './loading/loading.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { PromptComponent } from './prompt/prompt.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PaginatorComponent,
    BookmarkComponent,
    AddBookmarkComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatIconModule,
      MatTableModule,
      MatPaginatorModule,
      BrowserAnimationsModule,
      MatCheckboxModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSlideToggleModule]
  ],
  providers: [HttpService, ApiService, MatDatepickerModule, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
