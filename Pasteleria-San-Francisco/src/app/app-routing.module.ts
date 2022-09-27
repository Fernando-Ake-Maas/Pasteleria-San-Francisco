import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Inicio', component: HomeComponent},
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Productos', component: ProductosComponent},
  {path: 'Sucursales', component: SucursalesComponent},
  {path: 'Contacto',component:ContactoComponent},
  {path: 'Login', component:LoginComponent},
  {path: 'Registro', component:RegisterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
