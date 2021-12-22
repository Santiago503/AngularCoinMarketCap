import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { ViewsRoutingModule } from './views-routing.module';
import { QuotesComponent } from './quotes/quotes.component';
import { ConvertComponent } from './convert/convert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './convert/form-control/form-control.component';


@NgModule({
  declarations: [QuotesComponent, ConvertComponent, FormControlComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ViewsModule { }
