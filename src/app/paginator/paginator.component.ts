import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Output() onChanged = new EventEmitter<PageEvent>();
  @Input() pageEventParent: PageEvent;

  constructor() {}

  length: number;
  pageSizeOptions: number[] = [5, 10];

  pageEvent: PageEvent;

  onPaginateChange(event: PageEvent) {
    this.pageEvent = event;
    // отправляем в родительский компонент объект с данными для выборки бд
    this.onChanged.emit(this.pageEvent);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  ngOnInit() {
    this.pageEvent = this.pageEventParent;
    setTimeout(() => this.length = JSON.parse(localStorage['count'])['rowsCount'], 600);
  }
}
