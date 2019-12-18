import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Constants } from 'src/app/common/constants';
import { date } from 'src/app/common/date';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=> DateComponent),
      multi:true
    }
  ]
})
export class DateComponent implements OnInit, ControlValueAccessor {
days: string[] = Constants.getDays();
years: string[] = Constants.getYears(1900);
months:string[]= Constants.getMonth();

selectedValue: date;

changeDayValue(value: string) {
  this.selectedValue.day = value;
  this.propagateChange(this.selectedValue);
  //console.log(this.selectedValue);
}

changeMonthValue(value: string) {
  this.selectedValue.month = value;
  this.propagateChange(this.selectedValue);
  //console.log(this.selectedValue);
}

changeYearValue(value: string) {
  console.log(value);
  console.log(this.selectedValue);
  this.selectedValue = new date();
  console.log(this.selectedValue);
  this.selectedValue.year = value;
  this.propagateChange(this.selectedValue);
  //console.log(this.selectedValue);
}

  writeValue(obj: any): void {
    console.log('date');
    console.log(obj);
    if(obj !== undefined || obj !== '') {
      this.selectedValue = obj;
    }
    else {
      this.selectedValue = new date();
    }
  }
  registerOnChange(fn): void {
   this.propagateChange = fn;
  }
  registerOnTouched() {}
  propagateChange = (value: date) => {};

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  constructor() { 
    //console.log('date');
  }

  ngOnInit() {
  
  }

}
