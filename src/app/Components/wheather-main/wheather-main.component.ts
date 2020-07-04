import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheather-main',
  templateUrl: './wheather-main.component.html',
  styleUrls: ['./wheather-main.component.css']
})
export class WheatherMainComponent implements OnInit {
 WheatherData:any;
 WheatherData1:any;

  constructor() { }

  ngOnInit()  {
    this.WheatherData = {
      main : {},
      isDay: true
  };
  
  this.getWheatherData();
  console.log(this.WheatherData);
  this.getWheatherData1();
  console.log(this.WheatherData1);
  }
    getWheatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWheatherData(data);})

    let data = JSON.parse('{"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,"temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},"wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"JP","sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"Tawarano","cod":200}');
    this.setWheatherData(data);
  }
  setWheatherData(data){
    this.WheatherData = data;
    let sunsetTime = new Date(this.WheatherData.sys.sunset * 1000);
    this.WheatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WheatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WheatherData.temp_celcius = (this.WheatherData.main.temp - 273.15).toFixed(0);
    this.WheatherData.temp_min = (this.WheatherData.main.temp_min - 273.15).toFixed(0);
    this.WheatherData.temp_max = (this.WheatherData.main.temp_max - 273.15).toFixed(0);
    this.WheatherData.temp_feels_like = (this.WheatherData.main.feels_like - 273.15).toFixed(0);
  }
getWheatherData1(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWheatherData1(data1);})
  let data1 = JSON.parse('{"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,"temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},"wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"JP","sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"Tawarano","cod":200}');
    this.setWheatherData1(data1);
  }
  setWheatherData1(data1){
    this.WheatherData1 = data1;
    let sunsetTime1 = new Date(this.WheatherData1.sys.sunset * 1000);
    this.WheatherData1.sunset_time1 = sunsetTime1.toLocaleTimeString();
    let currentDate1 = new Date();
    this.WheatherData1.isDay = (currentDate1.getTime() < sunsetTime1.getTime());
    this.WheatherData1.temp_celcius1 = (this.WheatherData1.main.temp - 273.15).toFixed(0);
    this.WheatherData1.temp_min = (this.WheatherData1.main.temp_min - 273.15).toFixed(0);
    this.WheatherData1.temp_max = (this.WheatherData1.main.temp_max - 273.15).toFixed(0);
    this.WheatherData1.temp_feels_like = (this.WheatherData1.main.feels_like - 273.15).toFixed(0);
  }

}
