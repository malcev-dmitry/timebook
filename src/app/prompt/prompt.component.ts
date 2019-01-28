import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();
  @Input() rowId: number[];
  @Input() titlePrompt: string;

  constructor(private api: ApiService) {}

  showDeleteButton: boolean = true;

  back() {
    this.onChanged.emit(true);
  }

  onDelete() {
    const idsDelete: number[] = [];
    // из localstorage получаем реальные id строк и добавляем в массив
    for (let i = 0; i < this.rowId.length; i++) {
      idsDelete.push(JSON.parse(localStorage['bookmarks'])[this.rowId[i]]['id']);
    }
    this.api.DeleteRows(idsDelete);
    this.onChanged.emit(true);
  }

  ngOnInit() {
    if (this.rowId.length === 0) {
      this.showDeleteButton = false;
    }
  }
}
