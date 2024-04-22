import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit{
lessons : any[] = [];
constructor(private http: HttpClient){}

ngOnInit() {
  this.http.get<any>('https://localhost:7008/api/Lesson').subscribe(response => {
 // Assign the fetched lessons to the 'lessons' variable
 this.lessons = response.data; 
  }, error=>{
   console.error('Error fetching data:', error);
  });
}}
