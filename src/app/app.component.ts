import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  currentUrl: any;
  constructor( private activeRouter: ActivatedRoute, private router: Router){
    this.router.events.subscribe(e => {if(e instanceof NavigationEnd) {
      // console.log(e);
      this.currentUrl = e.url  // url or urlafterRedirects

    }})
    
  }
  title = 'electroLive';
  
}
