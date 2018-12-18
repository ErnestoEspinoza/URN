import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'PuntoDeInteres/:id',
    loadChildren: './pages/punto-de-interes/punto-de-interes.module#PuntoDeInteresPageModule'
  },
  { path: 'Login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'Catalogo', loadChildren: './pages/catalogo/catalogo.module#CatalogoPageModule' },
  { path: 'Registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
