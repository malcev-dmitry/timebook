import {Component} from '@angular/core';

export interface PeriodicElement {
  bookmark: string;
  position: number;
  priority: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, bookmark: 'Hydrogen', priority: 1},
  {position: 2, bookmark: 'Helium', priority: 2},
  {position: 3, bookmark: 'Lithium', priority: 3},
  {position: 4, bookmark: 'Beryllium', priority: 1},
  {position: 5, bookmark: 'Boron', priority: 2},
  {position: 6, bookmark: 'Carbon', priority: 3},
  {position: 7, bookmark: 'Nitrogen', priority: 1},
  {position: 8, bookmark: 'Oxygen', priority: 2},
  {position: 9, bookmark: 'Fluorine', priority: 3},
  {position: 10, bookmark: 'Neon', priority: 1},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'bookmark', 'priority'];
  dataSource = ELEMENT_DATA;
}
