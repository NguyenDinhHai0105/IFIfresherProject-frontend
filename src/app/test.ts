import { Question } from "./question";

export class Test {
    id !: number ;
    test_name !: string;
    test_time !: number | any;
    number_of_questions !: number;
    creat_at !: string;    
    questions !: Question[];

    constructor() {
        
    }
}
