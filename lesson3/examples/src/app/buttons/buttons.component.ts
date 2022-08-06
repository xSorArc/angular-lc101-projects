import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactive: boolean = false;
   gAct: boolean = false;
   sAct: boolean = false;
   cAct: boolean = false;

   constructor() { }

   ngOnInit() { }

   activation() {
      this.gAct = false;
      this.sAct = false;
      this.cAct = false;
   }

   mouseRandom() {
      let num = Math.floor(Math.random() * 3);

      if (num === 0) {
         return 'left';
      }
      if (num === 1) {
         return 'center';
      }
      if (num === 2) {
         return 'right';
      }
   }
}
