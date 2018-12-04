import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // loginForm: FormGroup;

  constructor() {
    // this.loginForm = fb.group({
    //   email: ['', Validators.compose([Validators.required, Validators.email])],
		// 	password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    // })
   }

  ngOnInit() {
  }

  login() {
    // let data = this.loginForm.value;

    // if (!data.email) {
    //   return;
    // }

    // let credentials = {
    //   email: data.email,
    //   password: data.password
    // };
    // this.auth.signInWithEmail(credentials)
    //   .then(
    //     () => this.navCtrl.parent.select(0),
    //     error => this.loginError = error.message
    //   );
  }

  // signup(){
  //   const myModal = this.modal.create(RegistroPage);
  //   myModal.onDidDismiss(()=> this.navCtrl.setRoot(PerfilPage) );
  //   myModal.present();
  // }

}
