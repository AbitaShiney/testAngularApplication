import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { ChartService } from '../services/chart.service';
import { Chart } from '../../../node_modules/chart.js/dist/Chart.min.js';
import { iChartData } from '../models/chart-data';


@Component({
  selector: 'app-second-section-bar-chart',
  templateUrl: './second-section-bar-chart.component.html',
  styleUrls: ['./second-section-bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  chart: any;
  chartobj: iChartData;

  constructor(private userService: ChartService) {
    this.userService.getUsers()
      .subscribe((res: iChartData) => {
        this.chartobj = JSON.parse(JSON.stringify(res));
      });
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //Due to space constraints I have taken only the first 5 objects from the api response

  public mockData = { "data": { "2020-06-30 0:0": { "ns": 72, "nrl": 16, "nlr": 16 }, "2020-06-30 0:15": { "ns": 78, "nrl": 20, "nlr": 15 }, "2020-06-30 0:30": { "ns": 68, "nlr": 15, "nrl": 15 }, "2020-06-30 0:45": { "ne": 1, "ns": 71, "nrl": 17, "nlr": 7 } }, "plot": { "x": ["2020-06-30 0:0", "2020-06-30 0:15", "2020-06-30 0:30", "2020-06-30 0:45"], "y": ["ne", "ns", "nw", "nrl", "nlr"] } };
  public barChartLabels: string[] = this.mockData.plot.x;
  public barName: string[] = this.mockData.plot.y;
  public barChartType = 'bar';
  public neArray: number[] = [];
  public nsArray: number[] = [];
  public nwArray: number[] = [];
  public nrlArray: number[] = [];
  public nlrArray: number[] = [];
  public barChartLegend = true;
  public barChartData = [
    { data: this.neArray, label: this.barName[0] }, //ne
    { data: this.nsArray, label: this.barName[1] }, //ns
    { data: this.nwArray, label: this.barName[2] }, //nw
    { data: this.nrlArray, label: this.barName[3] }, //nrl
    { data: this.nlrArray, label: this.barName[4] } //nlr
  ];


  ngOnInit(): void {

    this.mappingNE();
    this.mappingNS();
    this.mappingNW();
    this.mappingNRL();
    this.mappingNLR();
  }

  mappingNE() {
    for (var timestamp in this.mockData.data) {
      if (this.mockData.data.hasOwnProperty(timestamp)) {
        if (this.mockData.data[timestamp][this.barName[0]] === undefined) {
          this.neArray.push(0);
        }
        else {
          this.neArray.push(this.mockData.data[timestamp][this.barName[0]])
        }
      }
    }
  }

  mappingNS() {
    for (var timestamp in this.mockData.data) {
      if (this.mockData.data.hasOwnProperty(timestamp)) {
        if (this.mockData.data[timestamp][this.barName[1]] === undefined) {
          this.nsArray.push(0);
        }
        else {
          this.nsArray.push(this.mockData.data[timestamp][this.barName[1]])
        }
      }
    }
  }

  mappingNW() {
    for (var timestamp in this.mockData.data) {
      if (this.mockData.data.hasOwnProperty(timestamp)) {
        if (this.mockData.data[timestamp][this.barName[2]] === undefined) {
          this.nwArray.push(0);
        }
        else {
          this.nwArray.push(this.mockData.data[timestamp][this.barName[2]])
        }
      }
    }
  }

  mappingNRL() {
    for (var timestamp in this.mockData.data) {
      if (this.mockData.data.hasOwnProperty(timestamp)) {
        if (this.mockData.data[timestamp][this.barName[3]] === undefined) {
          this.nrlArray.push(0);
        }
        else {
          this.nrlArray.push(this.mockData.data[timestamp][this.barName[3]])
        }
      }
    }
  }

  mappingNLR() {
    for (var timestamp in this.mockData.data) {
      if (this.mockData.data.hasOwnProperty(timestamp)) {
        if (this.mockData.data[timestamp][this.barName[4]] === undefined) {
          this.nlrArray.push(0);
        }
        else {
          this.nlrArray.push(this.mockData.data[timestamp][this.barName[4]])
        }
      }
    }
  }
}
