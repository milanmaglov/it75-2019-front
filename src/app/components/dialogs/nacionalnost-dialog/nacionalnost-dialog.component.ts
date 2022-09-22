import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';

@Component({
  selector: 'app-nacionalnost-dialog',
  templateUrl: './nacionalnost-dialog.component.html',
  styleUrls: ['./nacionalnost-dialog.component.css']
})
export class NacionalnostDialogComponent implements OnInit {

  public flag!: number;
  
  constructor(private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<NacionalnostDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: Nacionalnost,
    public nacionalnostService: NacionalnostService) { }

  ngOnInit(): void {
  }

  public add() : void {
    this.nacionalnostService.insertNacionalnost(this.data).subscribe(() => {
      this.snackBar.open('Uspesno dodata nacionalnost!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public update() : void {
    this.nacionalnostService.updateNacionalnost(this.data).subscribe(() => {
      this.snackBar.open('Uspesno izmenjena nacionalnost!', 'OK' ,{duration: 2500});
    },
    (error: Error) => {
      this.snackBar.open('Doslo je do greske!', 'Zatvori', {duration: 2500});
    }
    );
  }

  public delete() : void {
    this.nacionalnostService.deleteNacionalnost(this.data.id).subscribe(() => {
      this.snackBar.open('Uspesno obrisana nacionalnost!', 'OK' ,{duration: 2500});
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
