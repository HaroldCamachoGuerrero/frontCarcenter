import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule}  from '@angular/common/http';

import {FormsModule} from '@angular/forms';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { VmecanicosComponent } from './components/vmecanicos/vmecanicos.component';
import { CmecanicosComponent } from './components/cmecanicos/cmecanicos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {ROUTES} from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacturacionComponent,
    VmecanicosComponent,
    CmecanicosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES,{useHash:true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
