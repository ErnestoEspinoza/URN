import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export interface Facultades {
  id?: string;
  nombre: string;
  descripcion: string;
  encargado: string;
  horario: string;
  turnos: string;
}
@Injectable({
  providedIn: 'root'
})
export class FacultadesService {
  private facultadesCollection: AngularFirestoreCollection<Facultades>;
  private facultades: Observable<Facultades[]>
  constructor(db: AngularFirestore) { 
    this.facultadesCollection = db.collection<Facultades>('facultades');
    this.facultades = this.facultadesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }
  getFacultades() {
    return this.facultades = this.facultadesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as facultades;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }
  getFacultad(id){
    return this.facultadesCollection.doc<Facultades>(id).valueChanges();
  }
  updateFacultades(facultades: Facultades, id: string) {
    return this.facultadesCollection.doc(id).update(facultades);
  }
  addFacultades(facultades: Facultades){
    return this.facultadesCollection.add(this.facultades);
  }
  removeFacultades(id) {
    return this.facultadesCollection.doc(id).delete();
  }
}
