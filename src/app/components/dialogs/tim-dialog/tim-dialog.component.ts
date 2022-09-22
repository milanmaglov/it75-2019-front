import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { LigaService } from 'src/app/services/liga.service';
import { TimService } from 'src/app/services/tim.service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit {

  public flag!: number;
  lige!: Liga[];
  
  constructor(private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<TimDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Tim,
    public timService: TimService,
    public ligaService: LigaService) {}

  ngOnInit(): void {
    this.ligaService.getAllLiga().subscribe( result =>{
      this.lige = result;
    })
  }

  public compare(a:any, b:any){
    return a.id == b.id;
  }

  public add() : void {
    this.timService.insertTim(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodat tim!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public update() : void {
    this.timService.updateTim(this.data).subscribe(() => {
      this.snackBar.open('Uspesno izmenjen tim!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public delete() : void {
    this.timService.deleteTim(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisan tim!', 'OK' ,{duration: 2500});
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
