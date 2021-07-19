export class Question {
    id !: number;
    question !: string;
    answer_a !: string;
    answer_b !: string;
    answer_c !: string;
    answer_d !: string;    
    correct_answer !: string;
    img !: string;
    select!:string; // lưu lựa chọn người dùng
    index!: number; 
}
