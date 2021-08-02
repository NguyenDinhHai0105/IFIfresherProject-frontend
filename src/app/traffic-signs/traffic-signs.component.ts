import { Component, OnInit } from '@angular/core';
import { TrafficSignsService } from '../services/traffic-signs.service';
import { TrafficSigns } from '../traffic-signs';

@Component({
  selector: 'app-traffic-signs',
  templateUrl: './traffic-signs.component.html',
  styleUrls: ['./traffic-signs.component.css']
})
export class TrafficSignsComponent implements OnInit {

  trafficSigns: TrafficSigns[];
  dangerSigns: TrafficSigns[] = new Array();
  prohibitionSigns: TrafficSigns[] = new Array();
  commandSigns: TrafficSigns[] = new Array();
  guideSigns: TrafficSigns[] = new Array();

  constructor(
    private trafficSignsService: TrafficSignsService
  ) { }

  ngOnInit(): void {
    this.trafficSignsService.getAllTrafficSigns().subscribe(data => {
      this.trafficSigns = data;
      this.trafficSigns.forEach(element => {
        if(element.type=="bienbaonguyhiem") {
          this.dangerSigns.push(element);
        } 
        else if (element.type == "bienbaocam"){
          this.prohibitionSigns.push(element);
        } 
        else if (element.type == "bienbaohieulenh"){
          this.commandSigns.push(element);
        } else {
          this.guideSigns.push(element);
        }
      });
    })
  }

}
