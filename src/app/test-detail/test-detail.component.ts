import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../question';
import { Test } from '../test';
import { TestService } from '../services/test.service';
import { DateTime } from 'luxon'


@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css']
})
export class TestDetailComponent implements OnInit {

  @Input() test !: Test;
  @Input() questions !: Question[];
  @Input() question !: Question;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  numberOfButton !: number;
  mark !: number;//tính điểm
  count = 0; // nếu count >= số câu hỏi người dùng đã chọn thì click được button nộp bài
  isSubmit = true; // khi nộp bài thì chuyển thành false để disable button nộp bài
  time = true; // time bằng false thì nộp bài, disable button nộp bài
  timeStart?: number


  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) { }

  getTimeNowBySecond(): number {
    let timeNow = DateTime.now()
    return timeNow.hour * 3600 + timeNow.minute * 60 + timeNow.second;
  }

  countDown() {
    return this.test.test_time * 60 + this.timeStart! - this.getTimeNowBySecond();
  }

  ngOnInit(): void {
    this.timeStart = this.getTimeNowBySecond();
    setInterval(() => { this.checkevent() }, 1000);
  }

  limitTime() {
    this.time = false;
  }

  checkevent() {
    if (this.countDown() <= 60) {
      this.limitTime();
    }
    if (this.countDown() <= 0) {
      this.getMark();
    }
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

  async getMark() {
    let mark = 0;
    await this.questions?.forEach(question => {
      if (question.correct_answer == question.select) {
        mark++;
      }
    });
    this.mark = mark;
    this.isSubmit = false; // chuyển thành fasle để disale button nộp bài
    //submit
    this.submit.emit();

  }
}
