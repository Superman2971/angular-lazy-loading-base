import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './home.component';
// Services
import { HomeService } from './home.service';

const routes: Routes = [
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    HomeService
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
