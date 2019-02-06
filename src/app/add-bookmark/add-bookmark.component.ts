import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange} from '@angular/material/radio';
import { PageEvent } from '@angular/material';
import { ApiService } from './../apiService';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() change: EventEmitter<MatRadioChange>;
  @Input() pageEventParent: PageEvent;
  @Input() rowId: number[];

  data: object = {};

  options: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  priorityDefault: number = 1;

  onBack(type: boolean) {
    this.onChanged.emit(type ? true : false);
  }

  onChange(mrChange: MatRadioChange) {
    this.priorityDefault = mrChange.value;
  }

  onAddBookmarkChange() {
    this.submitted = true;

    if (this.options.invalid) {
      return;
    }
    // подмена значения, иначе так и останется старое
    this.options.value['priority'] = this.priorityDefault;
    this.api.addRow(this.options.value);
    this.api.getIntervalRows(this.pageEventParent['pageIndex'] * this.pageEventParent['pageSize'], this.pageEventParent['pageSize']);
    this.onBack(true);
  }

  ngOnInit() {
    this.options = this.fb.group({
      tag: ['', Validators.required],
      title: ['', Validators.required],
      priority: this.priorityDefault,
      date_bookmark: ['', Validators.required]
    });

    setTimeout(() => {
      this.data = this.rowId ? JSON.parse(localStorage['bookmarks'])[this.rowId[0]] : null;
    }, 200);
  }

  get f() { return this.options.controls; }
}
