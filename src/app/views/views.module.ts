import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { ViewsRoutingModule } from './views-routing.module';
import { QuotesComponent } from './quotes/quotes.component';
import { ConvertComponent } from './convert/convert.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [QuotesComponent, ConvertComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,

  ]
})
export class ViewsModule { }
