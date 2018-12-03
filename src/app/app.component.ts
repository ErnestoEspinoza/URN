import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
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
    },
    {
      title: 'PrepaCU',
      url: '/PuntoDeInteres',
      icon: 'contacts'
    },
    {
      title: 'FIM',
      url: '/PuntoDeInteres',
      icon: 'contacts'
    },
 
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
