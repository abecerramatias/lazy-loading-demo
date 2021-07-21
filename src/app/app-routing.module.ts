import { NgModule } from '@angular/core';
import {   
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
  path: "first",
  loadChildren: () => import('./first/first.module').then(m => m.FirstModule)
  }
];  

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
