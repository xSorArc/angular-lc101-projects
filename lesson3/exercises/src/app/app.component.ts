import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  hasTakenOff: boolean = false;

  takeOff(rocketImg) {
    let result = window.confirm('Are you sure the shuttle is ready for take off?');

    if(result) {
      this.hasTakenOff = true;
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      rocketImg.style.bottom = '10px';
      this.message = 'Shuttle in flight.';
    }
  }

  landIt(rocketImg) {
    window.alert('The shuttle is landing. Landing gear engaged.');

    this.hasTakenOff = false;
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    rocketImg.style.bottom = '0px';
    this.message = 'The shuttle has landed.';
  }

  abort(rocketImg) {
    let result2 = window.confirm('Are you sure you want to abort the mission?');

    if(result2) {
      this.hasTakenOff = false;
      this.color = 'red';
      this.height = 0;
      this.width = 0;
      rocketImg.style.bottom = '0px';
      this.message = 'Mission aborted.';
    }
  }

  moveRocket(rocketImg, direction: string) {
    // Dynamically adjust the enabled/disabled status of the direction buttons based on the position of the rocket.
    let canMove: boolean = true; // ???
    
    if (direction === 'right' && this.width != 470000) {
        let movement = parseInt(rocketImg.style.left) + 10 + 'px';
        rocketImg.style.left = movement;
        this.width += 10000;
    } else if (direction === 'left' && this.width != -20000) {
        let movement2 = parseInt(rocketImg.style.left) - 10 + 'px';
        rocketImg.style.left = movement2; 
        this.width -= 10000;
    } else if (direction === 'up' && this.height != 330000) {
        let movement3 = parseInt(rocketImg.style.bottom) + 10 + 'px';
        rocketImg.style.bottom = movement3; 
        this.height += 10000;
    } else if (direction === 'down' && this.height != 0) {
        let movement4 = parseInt(rocketImg.style.bottom) - 10 + 'px';
        rocketImg.style.bottom = movement4; 
        this.height -= 10000;
    }

    if (this.height === 330000 || this.height === 0 || this.width === -20000 || this.width === 470000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }
}
