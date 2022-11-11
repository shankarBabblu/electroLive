

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing.component';


const routes : Routes = [
    {
        path: '', component: HomeComponent

    }
]

@NgModule({
  declarations: [
    
  
    LandingComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class LandingModule { }
