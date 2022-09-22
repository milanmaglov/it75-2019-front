import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { TimService } from 'src/app/services/tim.service';
import { TimDialogComponent } from '../../dialogs/tim-dialog/tim-dialog.component';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'osnovan', 'sediste', 'liga', 'actions'];
  dataSource! : MatTableDataSource<Tim>;
  subscription!: Subscription;
  selectedTimnaTop!: Tim;

  @ViewChild(MatSort, {static:false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  constructor(private timService: TimService,
    private dialog: MatDialog) { }

  ngOnDestroy(): void{
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.subscription = this.timService.getAllTim()
    .subscribe(
      // data => {console.log(data)}
      data => {this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator},
    (error: Error) => {console.log(error.name + ' ' + error.message)});
  }

  openDialog(flag: number, id?: number, naziv?: string, osnovan?: Date, sediste?: string, liga?: Liga){
    const dialogRef = this.dialog.open(TimDialogComponent, {data:{id,naziv,osnovan,sediste,liga}});

    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1)
        this.loadData();
    });
  }

  public select(row:Tim){
    this.selectedTimnaTop=row;
  }

  public applyFilter(filter: any){
    filter = filter.target.value;
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }

}
