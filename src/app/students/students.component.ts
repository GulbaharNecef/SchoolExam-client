import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent implements OnInit {
students: any[] = [];
constructor(private http: HttpClient){}

ngOnInit() {
  this.http.get<any>('https://localhost:7008/api/Student').subscribe(response => {
    // Assign the fetched exams to the 'exams' variable
    this.students = response.data; 
     }, error=>{
      console.error('Error fetching data:', error);
     });
  } 
}
