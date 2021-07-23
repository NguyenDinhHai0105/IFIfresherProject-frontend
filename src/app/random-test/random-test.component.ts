import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { TestService } from '../services/test.service';
import { Test } from '../test';

@Component({
  selector: 'app-random-test',
  templateUrl: './random-test.component.html',
  styleUrls: ['./random-test.component.css']
})
export class RandomTestComponent implements OnInit {

  test!: Test;
  questions!: Question[];
  question!: Question;
  // questions !: Question[];
  // numberOfButton !: number;
  // question !: Question;
  // mark !: number;//tính điểm
  // count = 0; // nếu count >= số câu hỏi người dùng đã chọn thì click được button nộp bài
  // isSubmit = true; // khi nộp bài thì chuyển thành false để disable button nộp bài
  // time = true; // 

  
  // limitTime() {
  //   this.time = false;
  // }

  // countTime() {
  //   setInterval(()=>{this.limitTime()}, 20*60*1000-1000*60);  
  //   setInterval(()=>{this.getMark()}, 20*60*1000);
  // }

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) { }

  getRandomTest(): void {
    this.testService.getRandomTest().subscribe(data => {
      this.test = data;
      this.questions = this.test.questions;
      this.getIndex();
      this.question = this.questions[0];
      // console.log(this.questions);//
      // this.chooseQuestion();     
      // this.countTime();
    });
  }

  ngOnInit() {
    this.getRandomTest();
  }

  getIndex(){
    let i = 0;
    this.questions.forEach(q => {
      q.index = i;
      i++;
    });
  }

  // chooseQuestion(index = 0) {
  //   this.question = this.questions[index];
  //   this.question.index = index;
  // }

  // onclick(char: string) {
  //   this.question.select = char; // lưu đáp án người dùng chọn cho câu hỏi hiện tại
  //   this.count++; // tăng lên để khi người dùng trả lời đủ câu hỏi thì cho nộp bài
  // }

  // check(char: string) { // hàm kiểm tra hiển thị đáp án người dùng chọn
  //   if (this.question.select == char) {
  //     return true;
  //   }
  //   return false;
  // }

  // goToNextQuest(index = 0) {
  //   if (index < this.questions.length - 1) {
  //     this.chooseQuestion(index + 1);
  //   }
  // }

  // goToPreviousQuest(index = 0) {
  //   if (index > 0) {
  //     this.chooseQuestion(index - 1);
  //   }
  // }

  // getMark(): void {
  //   let mark = 0;
  //   this.questions.forEach(question => {
  //     if (question.correct_answer == question.select) {
  //       mark++;
  //     }
  //   });
  //   this.mark = mark;
  //   this.isSubmit = false; // chuyển thành fasle để disale button nộp bài
  // }

}
