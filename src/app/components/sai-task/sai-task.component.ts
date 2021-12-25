import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  _name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, _name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, _name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, _name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, _name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, _name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, _name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, _name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, _name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, _name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, _name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 1, _name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, _name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, _name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, _name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, _name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, _name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, _name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, _name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, _name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, _name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-sai-task',
  templateUrl: './sai-task.component.html',
  styleUrls: ['./sai-task.component.scss']
})
export class SaiTaskComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator | null;
  
  constructor() { }

  ngOnInit(): void {
  }

  showRow(row: any) {
    console.log(row);
  }

  applyFilter(event: any) {
    console.log(event.target.value);
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
