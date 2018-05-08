import { Component } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from './album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Epicodus Tunes';
}
