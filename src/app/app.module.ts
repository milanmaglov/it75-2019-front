import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';
import { HomeComponent } from './components/core/home/home.component';
import { LigaComponent } from './components/model/liga/liga.component';
import { NacionalnostComponent } from './components/model/nacionalnost/nacionalnost.component';
import { TimComponent } from './components/model/tim/tim.component';
import { IgracComponent } from './components/model/igrac/igrac.component';
import { HttpClientModule } from '@angular/common/http';
import { LigaDialogComponent } from './components/dialogs/liga-dialog/liga-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NacionalnostDialogComponent } from './components/dialogs/nacionalnost-dialog/nacionalnost-dialog.component';
import { TimDialogComponent } from './components/dialogs/tim-dialog/tim-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { IgracDialogComponent } from './components/dialogs/igrac-dialog/igrac-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AboutComponent,
    HomeComponent,
    LigaComponent,
    NacionalnostComponent,
    TimComponent,
    IgracComponent,
    LigaDialogComponent,
    NacionalnostDialogComponent,
    TimDialogComponent,
    IgracDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
