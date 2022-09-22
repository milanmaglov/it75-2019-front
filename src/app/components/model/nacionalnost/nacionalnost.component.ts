import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';
import { NacionalnostDialogComponent } from '../../dialogs/nacionalnost-dialog/nacionalnost-dialog.component';

@Component({
  selector: 'app-nacionalnost',
  templateUrl: './nacionalnost.component.html',
  styleUrls: ['./nacionalnost.component.css']
})
export class NacionalnostComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'skracenica', 'actions'];
  dataSource! : MatTableDataSource<Nacionalnost>;
  subscription!: Subscription;

  @ViewChild(MatSort, {static:false}) sort!: MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!: MatPaginator;

  constructor(private nacionalnostService: NacionalnostService,
    private dialog: MatDialog) { }

  ngOnDestroy(): void{
    this.subscription.unsubscribe;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.subscription = this.nacionalnostService.getAllNacionalnost()
    .subscribe(
      // data => {console.log(data)}
      data => {this.dataSource = new MatTableDataSource(data)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator},
    (error: Error) => {console.log(error.name + ' ' + error.message)});
  }

  openDialog(flag: number, id?: number, naziv?: string, skracenica?: string){
    const dialogRef = this.dialog.open(NacionalnostDialogComponent, {data:{id,naziv,skracenica}});

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
