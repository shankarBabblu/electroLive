import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    document.querySelector('.cont')?.classList.toggle('s--signup');
  }

}
