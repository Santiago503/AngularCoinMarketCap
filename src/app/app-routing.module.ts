import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cryptos',
    loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule),
  },
  { path: '**', redirectTo: 'cryptos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
