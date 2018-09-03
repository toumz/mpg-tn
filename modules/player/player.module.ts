import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PlayerModule { 

  name: string;
  team: string;
  position: string;
  but: number;
  passe_d: number;
  minutes: number;
  age: string;


  constructor(name: string,team: string,position: string, but: number, passe_d: number,minutes: number,age: string) {
    this.name = name;
    this.team = team;
    this.position = position;
    this.but = but;  
    this.passe_d = passe_d;  
    this.minutes = minutes;  
    this.age = age;  
  }

}

module.exports = PlayerModule;

