import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CarcenterService } from '../../services/carcenter.service';
import { Mecanico } from '../../Modelos/Mecanico';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cmecanicos',
  templateUrl: './cmecanicos.component.html'

})
export class CmecanicosComponent {

  mecanico: Mecanico=new Mecanico();
  constructor(private  router:Router,private carcenter:CarcenterService) {

  }

  guardar(forma:NgForm){
if(forma.invalid){
Object.values(forma.controls).forEach(control=>{

control.markAsTouched();

});

return;
  }
 
 console.log(forma.value);
  
 this.mecanico.estado="0";
console.log(this.mecanico);

this.carcenter.PostMecanicos(this.mecanico).subscribe(data=>{
  console.log("se guardo con exito");
  console.log(data);
  this.router.navigate(["vmecanicos"]);
  
  
})


  
}



}



 
