import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { Test } from '../test';
import { TestService } from '../test.service';

declare var $: any;
@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  test !: Test;
  questions !: Question[];
  numberOfButton !: number;
  question !: Question;
  //id!: number; ???
  mark !: number;
  count = 0; // tính điểm, = 0 để kiểm tra
  isSubmit = true; // khi nộp bài thì chuyển thành false để disable button nộp bài
  

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) { }

  getDetailTest(): void {
    const routeParams = this.route.snapshot.paramMap;
    const testIdFromRoute = Number(routeParams.get('id'));
    this.testService.getTestById(testIdFromRoute).subscribe(data => {
      console.log(data);//
      this.test = data;
      this.questions = this.test.questions;
      console.log(this.questions);//
      this.chooseQuestion();
    });
  }

  ngOnInit(): void {  
    this.getDetailTest();
  }

  chooseQuestion(index = 0) {
    this.question = this.questions[index];
    this.question.index = index;
  }

  onclick(char: string) {
    this.question.select = char; // lưu đáp án người dùng chọn cho câu hỏi hiện tại
    this.count++; // tăng lên để khi người dùng trả lời đủ câu hỏi thì cho nộp bài
  }

  check(char: string) { // hàm kiểm tra hiển thị đáp án người dùng chọn
    if (this.question.select == char) {
      return true;
    }
    return false;
  }

  goToNextQuest(index = 0) {
    if (index < this.questions.length - 1) {
      this.chooseQuestion(index + 1);
    }
  }

  goToPreviousQuest(index = 0) {
    if (index > 0) {
      this.chooseQuestion(index - 1);
    }
  }

  getMark(): void {
    let mark = 0;
    this.questions.forEach(question => {
      if (question.correct_answer == question.select) {
        mark++;
      }
    });
    this.mark = mark;
    this.isSubmit = false; // chuyển thành fasle để disale button nộp bài
  }

}
