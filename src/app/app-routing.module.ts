import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './modules/auth/authenticate/authenticate.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
