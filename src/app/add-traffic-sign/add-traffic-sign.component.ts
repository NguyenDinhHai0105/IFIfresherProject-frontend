import { Component, OnInit } from '@angular/core';
import { TrafficSignsService } from '../services/traffic-signs.service';
import { TrafficSigns } from '../traffic-signs';

@Component({
  selector: 'app-add-traffic-sign',
  templateUrl: './add-traffic-sign.component.html',
  styleUrls: ['./add-traffic-sign.component.css']
})
export class AddTrafficSignComponent implements OnInit {

  form : any = {};
  trafficSign : TrafficSigns;

  constructor(
    private trafficSignService: TrafficSignsService
  ) { }

  ngOnInit(): void {
  }

  addTrafficSign() {
    this.trafficSign = new TrafficSigns(this.form.type, this.form.name, this.form.code, this.form.description, this.form.img);
    this.trafficSignService.addTrafficSign(this.trafficSign).subscribe(data => {});
    window.alert("Thêm thành công!");
  }

}
