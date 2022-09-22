import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/core/about/about.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HomeComponent } from './components/core/home/home.component';
import { LigaComponent } from './components/model/liga/liga.component';
import { NacionalnostComponent } from './components/model/nacionalnost/nacionalnost.component';
import { TimComponent } from './components/model/tim/tim.component';

const routes: Routes = [
  {path: 'liga', component: LigaComponent},
  {path: 'nacionalnost', component: NacionalnostComponent},
  {path: 'tim', component: TimComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
