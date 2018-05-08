import { Injectable } from '@angular/core';
import { Album } from './album.model';
// import { ALBUMS } from './mock-albums';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated'

@Injectable()
export class AlbumService {

  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
    // return this.ALBUMS;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: number){
    // for (var i = 0; i <= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
  }
}
