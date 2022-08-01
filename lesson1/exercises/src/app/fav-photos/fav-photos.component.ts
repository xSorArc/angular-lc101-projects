import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Section';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://th.bing.com/th/id/OIP.4CRAEaimmqqw_iOkB07n1gHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7';
  image3 = 'https://th.bing.com/th/id/OIP.xKMalULjkDWPG_YucvliWgHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.25&pid=1.7';

  constructor() { }

  ngOnInit() {
  }

}