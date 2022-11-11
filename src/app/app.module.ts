import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateComponent } from './modules/auth/authenticate/authenticate.component';
import { HomeComponent } from './modules/landing/home/home.component';
import { HeaderComponent } from './modules/common/header/header.component';
import { FooterComponent } from './modules/common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticateComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
