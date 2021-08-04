import { Component, Input, OnInit } from '@angular/core';
import { TrafficSignsService } from '../services/traffic-signs.service';
import { TrafficSigns } from '../traffic-signs';

@Component({
  selector: 'app-update-traffic-sign',
  templateUrl: './update-traffic-sign.component.html',
  styleUrls: ['./update-traffic-sign.component.css']
})
export class UpdateTrafficSignComponent implements OnInit {

  @Input() trafficSignFromList : TrafficSigns;
  form : any = {};
  trafficSign : TrafficSigns;

  constructor(
    private trafficSignService: TrafficSignsService
  ) { }

  ngOnInit(): void {
  }

  updateTrafficSign() {
    this.trafficSign = new TrafficSigns(this.form.type, this.form.name, this.form.code, this.form.description, this.form.img);
    this.trafficSignService.updateTrafficSign(this.trafficSign, this.trafficSignFromList.id).subscribe(data => {});
    window.alert("Cập nhật thành công!");
    window.location.reload();
  }

}
