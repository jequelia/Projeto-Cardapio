import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardapioComponent } from './components/cardapio/cardapio.component';

const routes: Routes = [
  {path:'', redirectTo:"cardapio", pathMatch:"full"},
  {path: 'cardapio', component: CardapioComponent},
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
