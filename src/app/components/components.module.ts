import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';


const component = [CardsComponent, LoadingSpinnerComponent, AlertComponent];

@NgModule({
  declarations: component,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: component
})
export class ComponentsModule { }
