import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Igrac } from 'src/app/models/igrac';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { Tim } from 'src/app/models/tim';
import { IgracService } from 'src/app/services/igrac.service';
import { IgracDialogComponent } from '../../dialogs/igrac-dialog/igrac-dialog.component';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit, OnChanges {

  displayedColumns = ['id', 'brojReg', 'datumRodjenja', 'ime', 'prezime', 'nacionalnost', 'actions'];
  dataSource! : MatTableDataSource<Igrac>;
  subscription!: Subscription;
  @Input() selectedTimnaBottom!: Tim;

  @ViewChild(MatSort, {static:false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  constructor(private igracService: IgracService,
    private dialog: MatDialog) { }
  ngOnChanges(): void {
    this.loadData();
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.subscription = this.igracService.getAllIgracByTim(this.selectedTimnaBottom.id)
    .subscribe(
      // data => {console.log(data)}
      data => {this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator},
    (error: Error) => {console.log(error.name + ' ' + error.message)});
  }

  openDialog(flag: number, id?: number, brojReg?: number, datumRodjenja?: Date, ime?: string, prezime?: string, nacionalnost?: Nacionalnost, tim?: Tim){
    const dialogRef = this.dialog.open(IgracDialogComponent, {data:{id,brojReg,datumRodjenja,ime,prezime,nacionalnost,tim}});

    dialogRef.componentInstance.flag = flag;
    dialogRef.componentInstance.data.tim = this.selectedTimnaBottom
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1)
        this.loadData();
    });
  }

  public applyFilter(filter: any){
    filter = filter.target.value;
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }

}
