import { Question } from "./question";

export class Test {
    id !: number ;
    test_name : string;
    test_time : number | any;
    number_of_questions : number;
    creat_at !: string;    
    questions : Question[];

    constructor(test_name: string, test_time: number, number_of_questions: number, questions: Question[] ) {
        this.test_name = test_name;
        this.test_time = test_time ;
        this.number_of_questions = number_of_questions;
        this.questions = questions;
    }
}
