import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Composition {
  id?: string;
  compositionName: string;
  compositionDescription: string;
  compositionData: string;
  createdAt: number;
  uid: string;

}

@Injectable({
  providedIn: 'root'
})
export class CompositionService {

  // Count Total Compositions
  compositionTotal: 0;

  private compositionCollection: AngularFirestoreCollection<Composition>;

  private compositions: Observable<Composition[]>;

  constructor(db: AngularFirestore) {
    this.compositionCollection = db.collection<Composition>('compositions');

    this.compositions = this.compositionCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getCompositions() {
    return this.compositions;
  }

  getComposition(id) {
    return this.compositionCollection.doc<Composition>(id).valueChanges();
  }

  updateComposition(composition: Composition, id: string) {
    return this.compositionCollection.doc(id).update(composition);
  }

  addComposition(composition: Composition) {
    return this.compositionCollection.add(composition);
    // Increase Total Number of Compositions
    this.compositionTotal++;
  }

  removeComposition(id) {
    return this.compositionCollection.doc(id).delete();
    // Decrease Total Number of Compositions
    this.compositionTotal--;
  }
}
