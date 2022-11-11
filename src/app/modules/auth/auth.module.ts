

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticateComponent } from './authenticate/authenticate.component';


const routes : Routes = [
    {
        path: '', component: AuthenticateComponent
    }
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
