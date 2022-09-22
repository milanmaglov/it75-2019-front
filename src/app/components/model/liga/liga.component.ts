import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga.service';
import { LigaDialogComponent } from '../../dialogs/liga-dialog/liga-dialog.component';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  dataSource! : MatTableDataSource<Liga>;
  subscription!: Subscription;

  @ViewChild(MatSort, {static:false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;
  
  constructor(private ligaService: LigaService,
    private dialog: MatDialog) { }

  ngOnDestroy(): void{
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.subscription = this.ligaService.getAllLiga()
    .subscribe(
      // data => {console.log(data)}
      data => {this.dataSource = new MatTableDataSource(data)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator},
    (error: Error) => {console.log(error.name + ' ' + error.message)});
  }

  openDialog(flag: number, id?: number, naziv?: string, oznaka?: string){
    const dialogRef = this.dialog.open(LigaDialogComponent, {data:{id,naziv,oznaka}});

    dialogRef.componentInstance.flag = flag;
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
