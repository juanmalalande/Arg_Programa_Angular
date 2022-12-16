import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  card1: string
  card2: string
  card3: string
  card4: string
  card5: string
  bg: number;

  constructor() {
    this.card1 = "Datos";
    this.card2 = "Experiencia";
    this.card3 = "Formación";
    this.card4 = "Competencias";
    this.card5 = "Intereses";
    this.bg = 0;
   }

  ngOnInit(): void {
  }

  restoreBg(){
    this.bg = 0;
    console.log(this.bg)
  }

  changeBg1(){
    this.bg = this.bg + 1;
    console.log(this.bg);
  }

  changeBg2(){
    this.bg = this.bg + 2;
    console.log(this.bg)
  }

  changeBg3(){
    this.bg = this.bg + 3;
    console.log(this.bg)
  }

  changeBg4(){
    this.bg = this.bg + 4;
    console.log(this.bg)
  }

  changeBg5(){
    this.bg = this.bg + 5;
    console.log(this.bg)
  }

}
