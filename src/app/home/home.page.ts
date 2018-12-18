import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public isLogged: boolean = false;
  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit(){
    this.getCurrentUser();
  }

  login(){
    this.router.navigate(['/Login']);
  }

  logout(){
    this.auth.logoutUser();
    this.router.navigate(['/home']);
    // window.location.reload();
    console.log(this.auth.isAuth());
  }

  getCurrentUser(){
    this.auth.isAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    });
  }

}
