import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent implements OnInit{
exams: any[] =[]; //a variable to store the fetched data
constructor(private http:HttpClient){}


ngOnInit() {
   this.http.get<any>('https://localhost:7008/api/Exam').subscribe(response => {
  // Assign the fetched exams to the 'exams' variable
  this.exams = response.data; console.log(this.exams);
   }, error=>{
    console.error('Error fetching data:', error);
   });
}}

