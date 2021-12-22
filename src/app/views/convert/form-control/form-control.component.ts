import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() clickConvert = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  Convert() {
    this.clickConvert.emit(this.formGroup);
  }

}
