import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo-years',
  templateUrl: './combo-years.component.html',
  styleUrls: ['./combo-years.component.css']
})
export class ComboYearsComponent implements OnInit {

  years = Array.from({length: 100}, (value, key) => key +2018);
  formats = ['table', 'list'];
  currentYear = 2018;
  currentFormat = 'table'
  constructor() { }

  @Output() yearChanged = new EventEmitter();
  @Output() formatChanged = new EventEmitter();

  ngOnInit() {
    this.emitYear();
    this.emitFormat();
  }
  
  selectYear(){   
   this.emitYear();
  }
  
  selectFormat(){   
    this.emitFormat();
   }

  emitYear(){
    this.yearChanged.emit(this.currentYear);
  }

  emitFormat(){
    this.formatChanged.emit(this.currentFormat);
  }

}
