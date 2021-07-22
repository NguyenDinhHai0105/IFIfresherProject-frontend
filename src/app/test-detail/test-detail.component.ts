import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { Test } from '../test';
import { TestService } from '../services/test.service';


@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  @Input() test !: Test;
  @Input() questions !: Question[];
  @Input() question !: Question;

  //@Output() submit : EventEmitter<any> = new EventEmitter();

  numberOfButton !: number;
  mark !: number;//tính điểm
  count = 0; // nếu count >= số câu hỏi người dùng đã chọn thì click được button nộp bài
  isSubmit = true; // khi nộp bài thì chuyển thành false để disable button nộp bài
  time = true; // 

  
  limitTime() {
    this.time = false;
  }

  countTime() {
    setInterval(()=>{this.limitTime()}, this.test.test_time*60*1000 - 1000*60);  
    setInterval(()=>{this.getMark()}, this.test.test_time*60*1000);
  }

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) { }


  ngOnInit(): void {
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
    this.questions?.forEach(question => {
      if (question.correct_answer == question.select) {
        mark++;
      }
    });
    this.mark = mark;
    this.isSubmit = false; // chuyển thành fasle để disale button nộp bài
    if(localStorage.getItem('user')){
      this.submit();
    }
    
  }

  submit(){

  }

}
