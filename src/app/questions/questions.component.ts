import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{
  


  public name: string =""; // name
  public correctAnswer: any=[];
  public incorrectAnswer: any=[];
  public isCompleted=true;
  public finalans=true;


    
  public questionText:string ="";
  public questionlist: any =[]; // questions list
  public currentQuestionsNumber:number=0; // current question
  public optionslist: any=[]; // option list and correct answer is here


  constructor(private questions: QuestionService, private router: Router){}
  
  ngOnInit(): void {
    this.name=localStorage.getItem("name")!;
    this.getAllquestions();
  }


  getAllquestions(){
    this.questions.getAllQuestion().subscribe(
      opt=>{

        this.questionlist=opt;

      }
    )
  }


  nextQuestion(){
    if(this.currentQuestionsNumber==this.questionlist.length-1){
        this.isCompleted=false;
    }

    if(this.currentQuestionsNumber==this.questionlist.length-2){
      // this.isCompleted=false;
      this.finalans= false;
      console.error(this.questionlist.lenght)
      // console.info("Correct questions are " + this.array );
    }
    console.error(this.questionlist.length)
    this.currentQuestionsNumber++;

  }
  // previousQuestion(){
  //   this.currentQuestionsNumber--;
  //   console.log(this.array);
  // }

  answer(cquestion: number, option: any){
    // if(cquestion===this.questionlist.lenght){
      
    // }
    // console.error(this.questionlist.lenght)

    if(option.correct){

      setTimeout(()=>{
        this.nextQuestion();
      }, 500);

      

      this.correctAnswer.push(this.questionlist[cquestion].questionText);
      console.log(this.correctAnswer);
      
      
      
    }else{
      this.incorrectAnswer.push(this.questionlist[cquestion].questionText);

      console.log("incorrect answer");
      setTimeout(()=>{
        this.nextQuestion();
      }, 1000);
    }

  }




  reviewandsubmit(){
    
  }

}
