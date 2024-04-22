import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
name: string = '';
surname : string = '';
class : number = 0;

constructor(private http: HttpClient, private router : Router){}


onSubmit(){
const newStudent={
  name : this.name,
  surname : this.surname,
  class : this.class
  };

  this.http.post('https://localhost:7008/api/Student', newStudent).subscribe(()=>
    {
      this.router.navigate(['/students']);
    }, error => {
      console.error('Error adding new lesson:', error);
    });
}}
