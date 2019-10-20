/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

quizId: string;
employeeId: string;
quizzes: any;
quiz: any;
questions: any = [];
question: any = [];
quizResults: any;

  constructor(private route: ActivatedRoute, private router: Router,  private cookieService: CookieService, private http: HttpClient) {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.employeeId = this.cookieService.get('employeeId');
    console.log("quizId is: " + this.quizId + "\nemployeeId is: " + this.employeeId);

    this.http.get('/api/quizzes/' + this.quizId).subscribe(res => {
    if (res){
      console.log(res);
      return this.quiz = res;
    } else {
      console.log("Error: Could not find quiz");
    }
   })
  }

  ngOnInit() {

  }

  return()  {
    this.router.navigate(['']);
  }

}

