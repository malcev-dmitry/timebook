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
  showTable: boolean = true;
  showPrompt: boolean = false;
  bookmarkShow: boolean = false;
  showAddBookMark: boolean = false;
  showAddBookMarkButton: boolean = true;
  showPaginator: boolean = true;
  deleteButton: boolean = true;
  backButton: boolean = false;

  titlePrompt: string;

  rowId: number[] = [];

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
    this.rowId.push(rowIdLocalStorage);
    this.showTable = false;
    this.showPrompt = false;
    this.bookmarkShow = true;
    this.showAddBookMark = false;
    this.showAddBookMarkButton = false;
    this.showPaginator = false;
    this.deleteButton = true;
    this.backButton = true;
  }

  back() {
    this.showAddBookMarkButton = true;
    this.showAddBookMark = false;
    this.showPaginator = true;
    this.bookmarkShow = false;
    this.deleteButton = true;
    this.backButton = false;
    this.showPrompt = false;
    this.showTable = true;
    this.loading = false;
    this.rowId.length = 0;
  }

  addBookMark() {
    this.showAddBookMarkButton = false;
    this.showAddBookMark = true;
    this.showPaginator = false;
    this.bookmarkShow = false;
    this.deleteButton = false;
    this.backButton = false;
    this.showTable = false;
    this.loading = false;
  }

  onEdit() {
    this.showAddBookMarkButton = false;
    this.showAddBookMark = false;
    this.showPaginator = false;
    this.bookmarkShow = false;
    this.deleteButton = false;
    this.backButton = false;
    this.showPrompt = true;
    this.showTable = false;
    this.loading = false;
    this.rowId.length = 0;
    this.titlePrompt = 'На данный момент данная операция нереализована';
  }

  onDelete() {
    this.showAddBookMarkButton = false;
    this.showAddBookMark = false;
    this.showPaginator = false;
    this.bookmarkShow = false;
    this.deleteButton = false;
    this.backButton = false;
    this.showPrompt = true;
    this.showTable = false;
    this.loading = false;

    if (this.rowId.length === 0) {
      this.titlePrompt = 'На данный момент, чтобы удалить заметку, необходимо кликнуть на нее, а затем удалить';
      return;
    }

    this.titlePrompt = 'Вы действительно хотите удалить заметку?';
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

  onChangedPrompt(pageEvent: boolean) {
    if (pageEvent) {
      this.pageEvent = {'previousPageIndex' : 0, 'pageIndex' : 0, 'pageSize' : this.limit};
      this.showAddBookMarkButton = true;
      this.showPaginator = true;
      this.deleteButton = true;
      this.backButton = false;
      this.showPrompt = false;
      this.showTable = true;
      this.loading = true;
      this.rowId.length = 0;
      this.onChanged(this.pageEvent);
    }
  }

  onChangedForButtonOk(pageEvent: boolean) {
    if (pageEvent) {
      setTimeout(() => { this.editDate(); this.api.getCountRows(); }, 300);
      this.redrawing();
    }
    this.showAddBookMarkButton = true;
    this.showAddBookMark = false;
    this.showPaginator = true;
    this.bookmarkShow = false;
    this.deleteButton = true;
    this.backButton = false;
    this.showTable = true;
    this.loading = false;
  }

  ngOnInit() {
    this.start();
  }
}
