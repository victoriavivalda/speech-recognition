import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonemicComponent } from './phonemic.component';

describe('PhonemicComponent', () => {
  let component: PhonemicComponent;
  let fixture: ComponentFixture<PhonemicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonemicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonemicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
