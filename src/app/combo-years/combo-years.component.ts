import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo-years',
  templateUrl: './combo-years.component.html',
  styleUrls: ['./combo-years.component.css']
})
export class ComboYearsComponent implements OnInit {

  years = Array.from({length: 100}, (value, key) => key +2018);
  currentYear = 2018;
  constructor() { }

  @Output() yearChanged = new EventEmitter();

  ngOnInit() {
    this.emitYear();
  }
  
  selectYear(){
   // alert(this.currentYear);
   this.emitYear();
  }
   
  emitYear(){
    this.yearChanged.emit(this.currentYear);
  }

}
