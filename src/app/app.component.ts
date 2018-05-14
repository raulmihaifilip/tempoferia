import { Component, Input } from '@angular/core';
import {getOrthodoxEaster, addDays, isWorkingDay} from 'src/utils/dateUtil';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tempoferia';  
  holiyear:Holiyear;
  format:string;

  yearChangedHandler(year:number)
{  
  this.holiyear =  new Holiyear(year);  
}
formatChangedHandler(format:string){
  this.format = format;
}
}

class Holiday{

  constructor(public name:string, public  targetDate:Date){} 

  getUtilityLabel(){
    return isWorkingDay(this.targetDate)? 'Useful' : 'Useless';
  }

  toString(){
    var momentDate = moment(this.targetDate);
    return `${momentDate.format("D MMMM")}, ${this.name}, ${momentDate.format("dddd")}, ${this.getUtilityLabel()}`;
  }
}

class Holiyear{
  year:number;    
  holidays:Holiday[];
  constructor(year:number){  
    this.year = year;  
    this.setHolidays();
  }  

  setHolidays(){
   this.holidays = [
    new Holiday("New Year's Day" ,new Date(this.year, 0, 1)),
    new Holiday("Day after New Year's Day", new Date(this.year, 0, 2)),
    new Holiday("Unification Day", new Date(this.year, 0, 24)),
    new Holiday("Orthodox Good Friday", addDays(getOrthodoxEaster(this.year), -2)),
    new Holiday("Orthodox Easter Monday", addDays(getOrthodoxEaster(this.year), 1)),
    new Holiday("Orthodox Pentecost Monday", addDays(getOrthodoxEaster(this.year), 50)),
    new Holiday("Labour Day", new Date(this.year, 4, 1)),
    new Holiday("Children's Day", new Date(this.year, 5, 1)),
    new Holiday("St Mary's Day", new Date(this.year, 7, 15)),
    new Holiday("St Andrew's Day", new Date(this.year, 10, 30)),
    new Holiday("National holiday", new Date(this.year, 11, 1)),
    new Holiday("Christmas Day", new Date(this.year, 11, 25)),
    new Holiday("Second day of Christmas", new Date(this.year, 11, 26))
    ].sort((a,b)=>{ return a.targetDate.getTime() -b.targetDate.getTime();} );
  } 
  
  getEffectiveHolidaysCount()
  {
      var count = 0;
      for (let holiday of this.holidays)
      {
          if (isWorkingDay(holiday.targetDate)){
              count++;
          }
      }

      return count;
  }
}
