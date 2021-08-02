import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  input : string;

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  sendInputToSearchResult() {
    this.route.navigate(['search', this.input]);
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate(['search', this.input]);
  }); 
  }

}
