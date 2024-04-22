import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LessonsComponent } from './lessons/lessons.component';
import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { ExamsComponent } from './exams/exams.component';
import { AddExamComponent } from './addExam/add-exam.component';
import { AddLessonComponent } from './add-lesson/add-lesson.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';

export const routes: Routes = [
    { path:'', redirectTo:'dashboard', pathMatch:'full'},
    { path:'dashboard', component:DashboardComponent},
    { path: 'teachers', component: TeachersComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'lessons', component: LessonsComponent },
    { path: 'exams', component: ExamsComponent },
    { path: 'add-exam', component: AddExamComponent },
    {path: 'add-lesson', component:AddLessonComponent},
    {path: 'add-student', component:AddStudentComponent},
    {path: 'add-teacher', component: AddTeacherComponent},
    
    {path:'', component:AppComponent,
        children:[
            {path:'lessons',component:LessonsComponent}
        ]
    }
];
