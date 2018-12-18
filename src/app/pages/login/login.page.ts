import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {
//   // loginForm: FormGroup;
//   constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
//   public email: string = '';
//   public password: string = '';
//   ngOnInit() {
//   }

//   onLogin(): void {
//     this.authService.loginEmailUser(this.email, this.password)
//       .then((res) => {
//         this.onLoginRedirect();
//       }).catch(err => console.log('err', err.message));
//   }


//   onLogout() {
//     this.authService.logoutUser();
//   }
//   onLoginRedirect(): void {
//     this.router.navigate(['/Catalogo']);
//   }

// }


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/Catalogo']);
  }
}