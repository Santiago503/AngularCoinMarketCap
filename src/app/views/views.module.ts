import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { ViewsRoutingModule } from './views-routing.module';
import { QuotesComponent } from './quotes/quotes.component';


@NgModule({
  declarations: [QuotesComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
