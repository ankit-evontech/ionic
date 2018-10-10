import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

	start_lat:any;
	start_long:any;
	res:any;
	end_lat:any;
	end_long:any;

	capturedTimeStamp:any;
  rows:number;
 

  is_start_disabled:any;
  is_end_disabled:any;
  is_delete_disabled:any;
  is_finish_disabled:any;
  is_finish:any;
  step:any; // 0:Starting, 1: Start Clicked, 2:End clicked, 3: Finished


  constructor(public navCtrl: NavController,private geolocation: Geolocation) {
    this.is_start_disabled=0;
    this.is_end_disabled=1;
    this.is_delete_disabled=1;
    this.is_finish_disabled=1;
  }

  getLatLong() {
        // console.log('geolocation');
        var options = {
            enableHighAccuracy: false,
            timeout: 30000,
            maximumAge: 0
          };

       this.geolocation.getCurrentPosition(options).then(position => {

            this.start_lat = position.coords.latitude;
            this.start_long = position.coords.longitude;
            this.res=position;           
            console.log(position);
        },error=>{
        	this.res=error;
            console.log(error);
        }).catch(e=>{
            this.res=e;
        })
    }

  getStartCordinates()
    {
      console.log("start");
      this.is_start_disabled=1;
      this.is_end_disabled=0;
      this.is_delete_disabled=0;
      this.is_finish_disabled=1;
    }
  getEndCordinates()
    {
      console.log("end");
      this.is_start_disabled=0;
      this.is_end_disabled=1;
      this.is_delete_disabled=1;
      this.is_finish_disabled=0;
    }
  deleteLastPoint()
    {
      console.log("delete");
      this.is_start_disabled=0;
      this.is_end_disabled=1;
      this.is_delete_disabled=1;
      this.is_finish_disabled=1;
    }
  finish()
    {
      console.log("finish");
     this.is_start_disabled=1;
    this.is_end_disabled=1;
    this.is_delete_disabled=1;
    this.is_finish_disabled=1;
    }

}
