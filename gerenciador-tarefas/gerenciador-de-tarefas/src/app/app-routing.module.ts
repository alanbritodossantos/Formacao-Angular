import { NgModule } from '@angular/core';
// import {  Router, RouterModule} from '@angular/router';
import {  Routes, RouterModule} from '@angular/router';

export const routes: Routes =[

];//array de lista de rotas

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}
