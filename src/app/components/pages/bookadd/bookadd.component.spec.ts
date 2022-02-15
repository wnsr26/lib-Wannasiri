import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookComponent } from './bookadd.component';

describe('BookaddComponent', () => {
  let component: NewBookComponent;
  let fixture: ComponentFixture<NewBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
