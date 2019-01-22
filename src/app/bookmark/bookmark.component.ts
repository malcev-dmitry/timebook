import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  // получаем id сткроки в localstorage
  @Input() rowId;
  constructor() { }

  message: string;
  ELEMENT_DATA: object;
  loading: boolean = true;
  color: string;

  ngOnInit() {
    this.ELEMENT_DATA = JSON.parse(localStorage['bookmarks']);
    const priority: number = this.ELEMENT_DATA[this.rowId]['priority'];
    setTimeout(() => {
      this.message = this.ELEMENT_DATA[this.rowId]['title'];
      this.loading = false;
      this.color = priority === 1 ? '#FC7F70' : priority === 2 ? '#F9F9AE' : '#CBFFBD';
    }, 500);
  }

}
