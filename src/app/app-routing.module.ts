import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvolvedComponent } from './involved/involved.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'whoweare', component: WhoweareComponent},
  { path: 'work', component: WorkComponent},
  { path: 'involved', component: InvolvedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
