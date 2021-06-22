import{ Routes} from '@angular/router';
import { CmecanicosComponent } from './components/cmecanicos/cmecanicos.component';
import { FacturacionComponent } from './components/facturacion/facturacion.component';
import { HomeComponent } from './components/home/home.component';
import { VmecanicosComponent } from './components/vmecanicos/vmecanicos.component';

export const ROUTES:Routes=[
{path:'home',component:HomeComponent},
{path:'facturacion',component:FacturacionComponent},
{path:'vmecanicos',component:VmecanicosComponent},
{path:'cmecanicos',component:CmecanicosComponent},
{path:'',pathMatch:'full',redirectTo:'home'},
{path:'**',pathMatch:'full',redirectTo:'home'}



]