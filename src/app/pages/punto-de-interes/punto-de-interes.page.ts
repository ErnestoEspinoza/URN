import { Component, OnInit } from '@angular/core';
import { Facultades, FacultadesService } from '../../services/facultades.service';
@Component({
  selector: 'app-punto-de-interes',
  templateUrl: './punto-de-interes.page.html',
  styleUrls: ['./punto-de-interes.page.scss'],
})
export class PuntoDeInteresPage implements OnInit {
facultades: Facultades[];
  constructor(private facultadesService: FacultadesService) { }

  ngOnInit() {
    this.facultadesService.getFacultades().subscribe(res => {
      this.facultades = res;
      console.log(this.facultades);
    });
  }
  remove(item) {
    this.facultadesService.removeFacultades(item.id);
  }

}
