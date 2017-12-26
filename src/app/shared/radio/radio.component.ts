import { RadioOption } from './radio-option.model';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[];
  value: any;
  onChange: any;
  onTapped: any;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any): void {
    this.value = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
    ;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(value: any): void {
    this.onTapped = value;
  }

}
