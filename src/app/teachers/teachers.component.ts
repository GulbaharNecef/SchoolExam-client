import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit {
teachers: any[] = [];
constructor(private http: HttpClient){}

ngOnInit(){
  this.http.get<any>('https://localhost:7008/api/Teacher').subscribe(response => {
    // Assign the fetched lessons to the 'lessons' variable
    this.teachers = response.data; 
     }, error=>{
      console.error('Error fetching data:', error);
     });
}
}
