import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionaryPage } from './questionary.page';

describe('HomePage', () => {
  let component: QuestionaryPage;
  let fixture: ComponentFixture<QuestionaryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionaryPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
