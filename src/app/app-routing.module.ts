import { NgModule } from '@angular/core';
import {   
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
  path: "first",
  loadChildren: "./first/first.module#FirstModule"
  }
];  

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
