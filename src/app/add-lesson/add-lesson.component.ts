import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-lesson',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css'
})
export class AddLessonComponent {
lessonCode : string ='';
lessonName : string = '';
class : number = 0;
teacherId : number = 0;

constructor(private http: HttpClient, private router: Router ) {  }

onSubmit(){
  const newLesson = {
    lessonCode: this.lessonCode,
    lessonName: this.lessonName,
    class: this.class,
    teacherId: this.teacherId
  };


  this.http.post<any>('https://localhost:7008/api/Lesson', newLesson).subscribe(() => {
      // Lesson added successfully, navigate back to Lessons page or any other page as needed
      this.router.navigate(['/lessons']);
    }, error => {
      console.error('Error adding new lesson:', error);
    });
}
}
