import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
// import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit{
  // albums: Album[] = [];
  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private albumService: AlbumService) { }

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
    // console.log(this.router.url); --display url route in console

  }


  // goToDetailPage(clickedAlbum: Album) {    --- for local non-firebase ---
    goToDetailPage(clickedAlbum) {
    //old - before we got were retreiving the album key from firebase
  //   this.router.navigate(['albums', clickedAlbum.id]);
  this.router.navigate(['albums', clickedAlbum.$key]);
};
}
