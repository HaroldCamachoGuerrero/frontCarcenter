import { Component, OnInit } from '@angular/core';
import {CarcenterService } from '../../services/carcenter.service';
@Component({
  selector: 'app-vmecanicos',
  templateUrl: './vmecanicos.component.html'
})
export class VmecanicosComponent  {

  mecanicos:any[]=[];
  constructor(private carcenter:CarcenterService) {

  
     this.carcenter.getMecanicos().subscribe((data:any) =>{
      console.log(data);
      this.mecanicos=data;
    });

   }



}
