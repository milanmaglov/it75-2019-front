import { Component, Inject, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-liga-dialog',
  templateUrl: './liga-dialog.component.html',
  styleUrls: ['./liga-dialog.component.css']
})
export class LigaDialogComponent implements OnInit {

  public flag!: number;
  
  constructor(private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<LigaDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Liga,
    public ligaService: LigaService) { }

  ngOnInit(): void {
  }

  public add() : void {
    this.ligaService.insertLiga(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodata liga!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public update() : void {
    this.ligaService.updateLiga(this.data).subscribe(() => {
      this.snackBar.open('Uspesno izmenjena liga!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public delete() : void {
    this.ligaService.deleteLiga(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisana liga!', 'OK' ,{duration: 2500});
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
