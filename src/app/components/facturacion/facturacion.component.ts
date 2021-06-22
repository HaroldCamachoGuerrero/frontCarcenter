import { Component, OnInit } from '@angular/core';
import {CarcenterService } from '../../services/carcenter.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html'
})
export class FacturacionComponent  {

  estado:boolean=false;
  estRep:boolean=false;
  estServ:boolean=false;
  mecanico:any={};
  repuestos:any[]=[];
  servicios:any[]=[];
  constructor(private carcenter:CarcenterService) {
  
  }

  buscar(termino:string="."){
    console.log(termino);

    this.carcenter.getMecanico(termino).subscribe(data=>{
console.log(data);
if (data==null){
  this.estado=false;
}

else {
  this.mecanico=data;
  this.estado=true;


}

    });

    this.carcenter.getRepuestos(termino).subscribe((data:any)=>{
      console.log(data);
      if (data.length==0){
        this.estRep=false;
      }

      
      else {
        this.repuestos=data;
        this.estRep=true;
      
      
      }
      
          });

          this.carcenter.getServicios(termino).subscribe((data:any)=>{
            console.log(data);
            if (data.length==0){
              this.estServ=false;
            }

      
            
            else {
              this.servicios=data;
              this.estServ=true;
            
            
            }
            
                });


  }
}
