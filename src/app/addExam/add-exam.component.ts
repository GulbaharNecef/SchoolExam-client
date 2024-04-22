import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-exam',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.css'
})
export class AddExamComponent {
  lessonCode: string = '';
  studentNumber: number = 0;
  examDate: Date = new Date();
  mark: number = 0;

  constructor(private http: HttpClient, private router: Router ) {  }

  onSubmit() {
    
    const newExam = {
      lessonCode: this.lessonCode,
      studentNumber: this.studentNumber,
      examDate: this.examDate,
      mark: this.mark
    };

    this.http.post<any>('https://localhost:7008/api/Exam', newExam).subscribe(() => {
      // Exam added successfully, navigate back to exams page or any other page as needed
      this.router.navigate(['/exams']);
    }, error => {
      console.error('Error adding new exam:', error);
    });
}
}
