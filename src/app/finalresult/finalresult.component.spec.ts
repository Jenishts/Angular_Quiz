import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalresultComponent } from './finalresult.component';

describe('FinalresultComponent', () => {
  let component: FinalresultComponent;
  let fixture: ComponentFixture<FinalresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
