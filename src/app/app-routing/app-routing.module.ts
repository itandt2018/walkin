import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { TestpageComponent } from '../testpage/testpage.component';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestpageComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'test/:id',
  component: TestpageComponent}
  
];




@NgModule({
	
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

