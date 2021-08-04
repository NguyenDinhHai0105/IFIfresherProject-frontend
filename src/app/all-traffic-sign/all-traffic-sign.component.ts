import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TrafficSignsService } from '../services/traffic-signs.service';
import { TrafficSigns } from '../traffic-signs';

@Component({
  selector: 'app-all-traffic-sign',
  templateUrl: './all-traffic-sign.component.html',
  styleUrls: ['./all-traffic-sign.component.css']
})
export class AllTrafficSignComponent implements OnInit {

  trafficSigns: TrafficSigns[];
  modalRef!: BsModalRef;

  constructor(
    private trafficSignService : TrafficSignsService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getAllTrafficSign();
  }

  getAllTrafficSign() {
    this.trafficSignService.getAllTrafficSigns().subscribe(data => {
      this.trafficSigns = data;
    });
  }

  deleteTrafficSign(id: number) {
    this.trafficSignService.deleteTrafficSign(id).subscribe(data => {});
    window.alert("Xóa thành công!");
    window.location.reload();
  }

  openModal(template: TemplateRef<any>) { // mở model
    this.modalRef = this.modalService.show(template);
  }

}
