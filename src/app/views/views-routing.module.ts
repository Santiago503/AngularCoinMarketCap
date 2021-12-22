import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';
import { ConvertComponent } from './convert/convert.component';


const routes: Routes = [
  {
    path: '',
    component: QuotesComponent,
  },
  {
    path: 'convert/:symbol/:toConvert',
    component: ConvertComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
