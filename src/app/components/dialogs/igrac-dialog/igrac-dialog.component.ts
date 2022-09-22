import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tim } from 'src/app/models/tim';
import { Igrac } from 'src/app/models/igrac';
import { TimService } from 'src/app/services/tim.service';
import { IgracService } from 'src/app/services/igrac.service';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit {

  public flag!: number;
  timovi!: Tim[];
  nacionalnosti!: Nacionalnost[];
  
  constructor(private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<IgracDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Igrac,
    public igracService: IgracService,
    public timService: TimService,
    public nacionalnostService: NacionalnostService) {}

  ngOnInit(): void {
    this.timService.getAllTim().subscribe( result =>{
      this.timovi = result;
    })
    this.nacionalnostService.getAllNacionalnost().subscribe( result =>{
      this.nacionalnosti = result;
    })
  }

  public compare(a:any, b:any){
    return a.id == b.id;
  }

  public add() : void {
    this.igracService.insertIgrac(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodat igrac!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public update() : void {
    this.igracService.updateIgrac(this.data).subscribe(() => {
      this.snackBar.open('Uspesno izmenjen igrac!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public delete() : void {
    this.igracService.deleteIgrac(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisan igrac!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public cancel() : void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'Zatvori', {duration: 1000});
  }

}
