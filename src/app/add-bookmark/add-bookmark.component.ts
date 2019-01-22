import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange} from '@angular/material/radio';
import { ApiService } from './../apiService';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  @Output() change: EventEmitter<MatRadioChange>
  options: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private api: ApiService) {}

  priorityDefault: number = 1;

  onBack() {
    this.onChanged.emit(true);
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
    console.log(this.options.value);
    this.api.addRow(this.options.value);
    this.api.getCountRows();
    this.onBack();
  }

  ngOnInit() {
    this.options = this.fb.group({
      tag: ['', Validators.required],
      title: ['', Validators.required],
      priority: this.priorityDefault,
      date_bookmark: ['', Validators.required]
    });
  }

  get f() { return this.options.controls; }
}
