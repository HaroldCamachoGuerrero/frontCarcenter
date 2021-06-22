import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Mecanico } from '../Modelos/Mecanico';
 @Injectable({
  providedIn: 'root'
})
export class CarcenterService {

  constructor(private http:HttpClient) {

console.log('el servicio esta subido');

   }

   getMecanicos(){
    return this.http.get('http://localhost:8080/mecanicos/view');
   }

   PostMecanicos(mec:Mecanico){
    return this.http.post('http://localhost:8080/mecanicos',mec);
   }

   
   getMecanico(termino: string){
    return this.http.get(`http://localhost:8080/mecanicos/id/${termino}`);
   }

   getRepuestos(termino: string){
    return this.http.get(`http://localhost:8080/mecanicos/repuestos/${termino}`);
   }

   getServicios(termino: string){
    return this.http.get(`http://localhost:8080/mecanicos/servicios/${termino}`);
   }
}
