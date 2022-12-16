import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

private date = new Date();
public hour: any;
public minute: any;
public ampm: any;


  constructor() { 

  }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000);
  }

  private updateDate(date : Date){
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'p.m.' : 'a.m.';
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minute = date.getMinutes();
    this.minute = minute < 10 ? '0' + minute : minute.toString();

  }
        

}
