/*
============================================
; Title:  Hemminger NodeQuiz
; Author: Andrew Hemminger
; Date:  27 September 2019
; Description: NodeQuiz application
;===========================================
*/
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import * as moment from 'moment';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

quizId: string;
employeeId: string;
quiz: any;
questions: any = [];
question: any = [];
Answers: string;
quizResults: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cookieService: CookieService,
              private http: HttpClient //, public dialog: MatDialog
              ) {
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

  onSubmit(form) {
    let quizScore = 0;
    let totalPossible = 100;

    this.quizResults = form;
    this.quizResults['employeeId'] = this.employeeId;
    this.quizResults['quizId'] = this.quizId;

    this.cookieService.set('quizResults', this.quizResults); //save quizResults in cookies
    this.router.navigate(['/quiz-result']);
    console.log(this.quizResults);

    /*
    // open dialog and display results
    const dialogRef = this.dialog.open(QuizResultDialog, {
      data: {
        quizResults: this.quizResults
      },
      disableClose: true,
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log(this.quizResults);
    })
    */
  }
}


/*
@Component({
  selector: 'quiz-result-dialog',
  templateUrl: 'quiz-result-dialog.html',
})
export class QuizResultDialog {

  constructor(public dialogRef: MatDialogRef<QuizResultDialog>) {}

  }
*/


