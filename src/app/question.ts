export class Question {
    id !: number;
    question: string;
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    correct_answer: string;
    img: string;
    select!: string; // lưu lựa chọn người dùng
    index!: number;

    constructor(question: string, answer_a: string, answer_b: string, answer_c: string, answer_d: string, correct_answer: string, img: string) {
        this.question = question;
        this.answer_a = answer_a;
        this.answer_b = answer_b;
        this.answer_c = answer_c;
        this.answer_d = answer_d;
        this.correct_answer = correct_answer;
        this.img = img;
    }
    
}

