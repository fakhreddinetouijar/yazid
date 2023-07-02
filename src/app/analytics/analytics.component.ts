import { Component , OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
declare var window:any;
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class ANALYTICSComponent implements OnInit {

  date = new Date().toISOString().split('T')[0];
 
   constructor() { }
 
   ngOnInit(): void {
 
     const myChart = new Chart("myChart", {
       type: 'bar',
       data: {
           labels: ["All Transaction", "Successful Transaction", "Declined Transaction"],
           datasets: [{
               label: '',
               data: [10, 6 , 4],
               backgroundColor : ["GRAY", "green","red"],
              
           }]
       },
       options: {
           scales: {
               y: {
                   
                   beginAtZero: true
               }
           },
           plugins: {
             legend: {
               display: false
             },
             
           }
       }
   });
     
 }
 }