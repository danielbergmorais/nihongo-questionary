import { Component } from '@angular/core';
import { questions, koreQuestions, placesQuestions }  from '../../assets/questions'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionary',
  templateUrl: 'questionary.page.html',
  styleUrls: ['questionary.page.scss'],
  standalone: false,
})
export class QuestionaryPage {
  constructor(private route: ActivatedRoute) {}

  id: string | null = null;

  selectedOption: string | null = null;
  currentQuestion = 0;
  showResult = false;
  isPlaying = false;
  audio = new Audio();
  questions = questions;

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id'); // retorna null se não existir
  if(id) {
    switch (id) {
      case 'who':
        this.questions = koreQuestions;
        break;
      case 'places':
        this.questions = placesQuestions;
        break;
      case 'family':
        this.questions = questions;
        break;
      default:
        this.questions = questions;
        break;
    }
  } else {
    this.questions = questions;
  }


}
playAudio(src: string) {
  this.audio.src = 'assets/audios/' + src;
  this.isPlaying = true;

  this.audio.play();

  this.audio.onended = () => {
    this.isPlaying = false;
  };
}

  selectOption(value: string) {

    if (this.showResult) return;

    this.selectedOption = value;
    this.showResult = true;
  }

  getOptionClass(value: string) {

    if (!this.showResult) {
      return this.selectedOption === value ? 'selected' : '';
    }

    if (value === this.questions[this.currentQuestion].correct) {
      return 'correct';
    }

    if (value === this.selectedOption) {
      return 'wrong';
    }

    return 'disabled';
  }

  

  get progress() {
    return (this.currentQuestion + 1) / this.questions.length;
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.selectedOption = null;
        this.showResult = false;
      this.currentQuestion++;
    }
  }

}
