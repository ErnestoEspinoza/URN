import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FacultadesService } from './services/facultades.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private facultades;
  public appPages = [
    {
      title: 'Presentación',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Puntos de interes',
      url: '/list',
      icon: 'list'
    }
 
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private FacultadesService: FacultadesService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.FacultadesService.getFacultades().subscribe(res => {
        this.facultades = res;
        for (let fac of this.facultades){
          this.appPages.push( { title: fac.nombre, url: "/PuntoDeInteres/" + fac.id , icon: "contacts"} );
        }
        console.log(this.facultades);
      });
    });
  }
}
