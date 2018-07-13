import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  JSON;
  nepalProvinces = 'maps/nepalprovinces';
  provinceOne = 'maps/nepalprovincesOne';
  provinceThree = 'maps/nepalprovincesThree';
  provinceFour = 'maps/nepalprovincesFour';
  provinceFive = 'maps/nepalprovincesFive';
  provinceSix = 'maps/nepalprovincesSix';
  district;

  chart = {
			        "caption": "",
			        "subcaption": "",
			        "entityFillHoverColor": "#cccccc",
			        "numberScaleValue": "",
			        "numberScaleUnit": "",
			        "numberPrefix": "",
			        "showLabels": "1",
			        "theme": "ocean",
			    };

	colorrange = {
					        "minvalue": "0",
					        "startlabel": "Minimum",
					        "endlabel": "Maximum",
					        "code": "#c7dbf9",
					        "gradient": "1",
					        "color": [
					            {
					                "maxvalue": "100",
					                "code": "#aac4ef"
					            }
					        ]
					    };


  nepalProvincesData = {
    "chart": this.chart,
    "colorrange": this.colorrange,
    "data": [
        {
        	"id": "NP.ON",
        	"value": "100" 
        },
        {
        	"id": "NP.FO",
        	"value": "90" 
        },
        {
        	"id": "NP.TH",
        	"value": "5" 
        },
        {
        	"id": "NP.FI",
        	"value": "3" 
        }

    ]
	};

	provinceOneData = {
    "chart": this.chart,
    "colorrange": this.colorrange,
    "data": [
        {
        	"id": "NP.ON.IL",
        	"value": "50"
        },
         {
        	"id": "NP.ON.JH",
        	"value": "50"
        }

    ]
	};

	provinceThreeData = {
    "chart": this.chart,
    "colorrange": this.colorrange,
    "data": [
       {
      	"id": "NP.TH.NU",
      	"value": "1"
       },
       {
      	"id": "NP.TH.KV",
      	"value": "1"
       },
       {
      	"id": "NP.TH.SP",
      	"value": "1"
       },
       {
      	"id": "NP.TH.LL",
      	"value": "1"
       },
       {
      	"id": "NP.TH.KT",
      	"value": "1"
       }

    ]
	};

	provinceFourData = {
    "chart": this.chart,
    "colorrange": this.colorrange,
    "data": [
       {
      	"id": "NP.FO.KS",
      	"value": "3"
       },
       {
      	"id": "NP.FO.SY",
      	"value": "2"
       }
    ]
	};

	provinceFiveData = {
    "chart": this.chart,
    "colorrange": this.colorrange,
    "data": [
       {
      	"id": "NP.FI.PL",
      	"value": "2"
       },
       {
      	"id": "NP.FI.GU",
      	"value": "3"
       }
    ]
	};

  provinceSixData = {
    "chart": this.chart,
    "colorrange": this.colorrange,
    
  };


  options = {
    responsive: true,
    maintainAspectRatio: true
  };

  plantationAndProductionType = 'bar';
  plantationAndProductionData = {
    labels: ["2066/67", "2067/68", "2068/69", "2069/70" ,"2070/71", "2071/72", "2072/73"],
    datasets: [
      {
        label: "Plantation (ha)",
        data: [1630, 1752, 1760, 1750, 1911, 2381, 2618],
        backgroundColor: ["red", "red", "red", "red", "red", "red", "red"]
      },
      {
        label: "Production (MT)",
        data: [429, 502, 523, 457, 429.4, 463.58, 434],
        backgroundColor: ["green", "green", "green", "green", "green", "green", "green"]
      }
    ]
  };

  importExportType = 'bar';
  importExportData = {
    labels: ["2066/67", "2067/68", "2068/69", "2069/70" ,"2070/71", "2071/72", "2072/73"],
    datasets: [
      {
        label: "Import Value Rs. (000)",
        data: [13861, 12513, 20894, 31733, 34815, 56465, 55597],
        backgroundColor: ["red", "red", "red", "red", "red", "red", "red"]
      },
      {
        label: "Export Value Rs. (000)",
        data: [24363, 93089, 43095, 45259, 52395, 99304, 108191],
        backgroundColor: ["green", "green", "green", "green", "green", "green", "green"]
      }
    ]
  };

  exportType = 'bar';
  exportData = {
    labels: ["2066/67", "2067/68", "2068/69", "2069/70" ,"2070/71", "2071/72", "2072/73"],
    datasets: [
      {
        label: "Export Quantity KG",
        data: [69044, 279764, 109442, 85672, 66462, 99847, 112378],
        backgroundColor: ["green", "green", "green", "green", "green", "green", "green"]
      }
    ]
  };

  correlationType = 'scatter';
  correlationOption = {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    };
  correlationData = {
        datasets: [{
            label: 'Province 1',
            data: [{
                x: 1,
                y: -1
            }, {
                x: -2,
                y: -1
            },
            , {
                x: 3,
                y: 5
            }, {
                x: 12,
                y: 2
            }, {
                x: 13,
                y: 52
            },
            {
                x: 10,
                y: 5
            },{
                x: 20,
                y: 5
            }
            , {
                x: 5,
                y: 15
            }],
            backgroundColor: ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red"],
            pointBackgroundColor: ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red"]
        },
        {
            label: 'Province 3',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 50,
                y: 5
            },{
                x: 27,
                y: 5
            }, {
                x: 51,
                y: 30
            }, {
                x: 60,
                y: 15
            },{
                x: 0,
                y: -1
            }, {
                x: 2,
                y: -1
            },
            , {
                x: 8,
                y: 5
            }
            ],
            backgroundColor: ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
            pointBackgroundColor: ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"]
        }

        ],

    };

  constructor() {
  }

  ngOnInit() {
    document.getElementById("districtDisplay").style.display = "none";
    document.getElementById("tableDistrict").style.display = "none";
  }

  public showStats(event){
    this.district = event.toElement.id;
    document.getElementById("districtDisplay").style.display = "";
    document.getElementById("tableDistrict").style.display = "";
  }

}
