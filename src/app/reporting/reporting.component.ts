import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  type = 'line';
  data = {
    labels: ["2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073"],
    datasets: [
      {
        label: "Import Value",
        borderColor: "#3e95cd",
        data: [13861, 12513, 20894, 31733, 34815, 56456, 55597, 84539],
        fill: false,
      },
      // {
      //   label: "Export Quantity",
      //   borderColor: "#8e5ea2",
      //   data: [551, 554, 224, 590, 222, 300, 121],
      //   fill: false,
      // },
      {
        label: "Export Value",
        borderColor: "#808000",
        data: [24363, 93089, 43095, 45259, 52395, 99304, 108191, 50405],
        fill: false,
      },
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        xAxes: [{
            scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }],
        yAxes: [{
            scaleLabel: {
            display: true,
            labelString: 'Nepalese RS'
          }
        }]
      }
  };

  type1 = 'bar';
  data1 = {
    labels: ["2066", "2067", "2068", "2069", "2070", "2071", "2072"],
    datasets: [
      {
        label: "Plantation",
        type: "line",
        borderColor: "#00FF00",
        data: [1630, 1752, 1760, 1750, 1911, 2381, 2618],
        fill: false,
      },
      {
        label: "Green Bean",
        backgroundColor: "#3e95cd",
        data: [851, 624, 124, 421, 124, 245, 221]
      },
      {
        label: "Roasted Bean",
        backgroundColor: "#8e5ea2",
        data: [551, 554, 224, 590, 222, 300, 121]
      },
      {
        label: "Brown Bean",
        backgroundColor: "#808000",
        data: [951, 690, 190, 490, 150, 345, 321]
      },
    ]
  };
  options1 = {
    responsive: true,
    maintainAspectRatio: false,
    xAxes: [{
       scaleLabel: {
        display: true,
        labelString: 'Year'
      }
    }],
    yAxes: [{
        scaleLabel: {
        display: true,
        labelString: 'Metric Ton(MT)'
      }
    }]
  };


  constructor() {
  	
  }

  ngOnInit() {
  }


}
