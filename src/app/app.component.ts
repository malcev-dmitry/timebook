import { Component } from '@angular/core';
import { ApiService } from './apiService';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) {}

  ELEMENT_DATA: object;
  displayedColumns: string[];
  dataSource: object;

  // видимость элементов
  loading: boolean = true;
  bookmarkShow: boolean = false;
  showAddBookMark: boolean = false;
  showAddBookMarkButton: boolean = true;
  deleteButton: boolean = true;
  backButton: boolean = false;

  rowId: number;

  // default for select bd
  id: number = 0;
  limit: number = 5;

  pageEvent: object = {'previousPageIndex' : 0, 'pageIndex' : 0, 'pageSize' : this.limit};

  editDate() {
    let shortDate: Date;
    let data: object = JSON.parse(localStorage['bookmarks']);
    const month: string[] = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля',
                              'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    for (let key in data) {
      shortDate = new Date(data[key]['date_bookmark']);
      data[key]['date_bookmark'] = `${shortDate.getDate()}
      ${month[shortDate.getMonth()]} ${shortDate.getFullYear()} г.`;
    }
    // скопировали данные в localstorage, изменили дату, перезаписали localstorage
    localStorage.removeItem('date_bookmark');
    localStorage.clear();
    localStorage['bookmarks'] = JSON.stringify(data);
  }

  getColor(id: number) {
    const color: number = this.ELEMENT_DATA[id]['priority'];
    return color;
  }

  getRowId(rowIdLocalStorage: number) {
    this.rowId = rowIdLocalStorage;
    this.loading = true;
    this.bookmarkShow = true;
    this.showAddBookMark = false;
    this.showAddBookMarkButton = false;
    this.deleteButton = true;
    this.backButton = true;
  }

  back() {
    this.showAddBookMarkButton = true;
    this.showAddBookMark = false;
    this.bookmarkShow = false;
    this.deleteButton = true;
    this.backButton = false;
    this.loading = false;
  }

  addBookMark() {
    this.showAddBookMarkButton = false;
    this.showAddBookMark = true;
    this.bookmarkShow = false;
    this.deleteButton = false;
    this.backButton = false;
    this.loading = false;
  }

  redrawing() {
    setTimeout(() => {
      this.ELEMENT_DATA = JSON.parse(localStorage['bookmarks']);
      this.displayedColumns = ['id', 'date_bookmark', 'tag'];
      this.dataSource = this.ELEMENT_DATA;
      this.loading = false;
    }, 600);
  }

  start() {
    this.api.getIntervalRows(this.id, this.limit);

    setTimeout(() => {
      this.loading = true;
      this.editDate();

      // вызывается спец.здесь, т.к. localstorage очищается в editDate()
      this.api.getCountRows();
    }, 300);
    this.redrawing();
  }

  onChanged(pageEvent: object) {
    this.id = pageEvent['pageIndex'] * pageEvent['pageSize'];
    this.limit = pageEvent['pageSize'];
    this.pageEvent = pageEvent;
    this.start();
  }

  onChangedForButtonOk(pageEvent: boolean) {
    if (pageEvent) {
      setTimeout(() => { this.editDate(); this.api.getCountRows(); }, 300);
      this.redrawing();
      this.showAddBookMarkButton = true;
      this.showAddBookMark = false;
      this.bookmarkShow = false;
      this.deleteButton = true;
      this.backButton = false;
      this.loading = false;
    }
  }

  ngOnInit() {
    this.start();
  }
}
