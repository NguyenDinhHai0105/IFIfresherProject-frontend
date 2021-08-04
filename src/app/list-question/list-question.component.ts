import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../services/question.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  @Input() page: number = 0;
  @Input() size!: number;
  @Input() questions: Question[];
  @Input() totalQuestions: number;
  imgSource: string;
  modalRef!: BsModalRef;

  constructor(
    private questionService: QuestionService,
    private modalService: BsModalService,
    private router: Router
  ) { }

  // getQuestions($event) {
  //   this.page = $event;
  //   this.questionService.getQuestionsByPage($event - 1, this.size = 5).subscribe( data => {      
  //     this.questions = data.content;
  //     this.totalQuestions = data.totalElements;
  //   })
  // }

  deleteQuestion(id: number) {
    this.questionService.deleteQuestion(id).subscribe(data => {
      window.alert("Xóa thành công!");
      // this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      //   this.router.navigate(['admin']);
      // });
    },
      error => {
        window.alert("Không thể xóa câu hỏi trong 1 đề thi!");
      }
    );
  }

  ngOnInit(): void {
    // this.getQuestions(this.page);
  }

  // 

  openModal(template: TemplateRef<any>) { // mở model
    this.modalRef = this.modalService.show(template);
  }

}
