import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private homeService:HomeService) { }

  data = [];

  ngOnInit() {
    // this will eventually be a service call with HTTP response;
    this.getData(this.homeService.tempData).then(data => {
      this.setData(data);
    });
  }

  getData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(data);
      }, 1000);
    });
  }

  setData(data) {
    this.data = data;
  }
}
