import { getLocation } from './utils.js';
import Quake from './quakes.js';
import QuakesView from './quakeView.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;
    this.parentElement = null;
    this.position = position || {
      lat: 0,
      lon: 0
    };
    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }
  async init() {
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(100);
  }
  async initPos() {
    if (this.position.lat === 0) {
      try {
        const posFull = await getLocation();
        this.position.lat = posFull.coords.latitude;
        this.position.lon = posFull.coords.longitude;
        //console.log(posFull);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius = 100) {
    //set loading message
    document.querySelector('#quakeList').innerHTML = "<li>Loading...</li>";
    
    // let input = document.getElementById("radius")
    // let value = input.value; 
    // if (value != NaN || value != null || value != undefined) {
    //   radius = value;
    // }

    console.log(document.querySelector('#quakeList'))
    
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      100
    );
    // render the list to html
    if (this.parentElement){
    this.quakesView.renderQuakeList(quakeList, this.parentElement);
    }
    // add a listener to the new list of quakes to allow drill down in to the details
    this.parentElement.addEventListener('touchend', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
  }
  async getQuakeDetails(quakeId) {
    const quake = this.quakes.getQuakeById(quakeId);
    this.quakesView.renderQuake(quake, this.parentElement);
  }
}