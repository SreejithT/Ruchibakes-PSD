import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"blogdetails",
    component: BlogdetailsComponent
  },
  {
    path:"blog",
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
