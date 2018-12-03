import { Component, OnInit } from '@angular/core';
import { Facultades, FacultadesService } from '../../services/facultades.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-punto-de-interes',
  templateUrl: './punto-de-interes.page.html',
  styleUrls: ['./punto-de-interes.page.scss'],
})
export class PuntoDeInteresPage implements OnInit {
  facultad: Facultades;
  idFacultad: string;
  constructor(private route: ActivatedRoute, private facultadesService: FacultadesService) { }

  ngOnInit() {
    this.idFacultad = this.route.snapshot.params['id'];
    if (this.idFacultad)  {
      this.loadFacultad();
    }
  }

  loadFacultad(){
    this.facultadesService.getFacultad(this.idFacultad).subscribe(res => {
      this.facultad = res;
      console.log(this.facultad);
    });
  }

  remove(item) {
    this.facultadesService.removeFacultades(item.id);
  }

}
