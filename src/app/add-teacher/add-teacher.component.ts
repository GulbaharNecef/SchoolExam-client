import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent {
name: string = '';
surname: string = '';

constructor(private http: HttpClient, private router: Router){}

onSubmit(){
  const newTeacher ={
    name: this.name,
    surname: this.surname
  };

  this.http.post('https://localhost:7008/api/Teacher', newTeacher).subscribe(()=>{
    this.router.navigate(['/teachers']);
  }, error => {
    console.error("Error adding new teacher: ", error);
  });
}}
