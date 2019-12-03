import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfsoortenComponent } from './verfsoorten.component';

describe('VerfsoortenComponent', () => {
  let component: VerfsoortenComponent;
  let fixture: ComponentFixture<VerfsoortenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfsoortenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfsoortenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
