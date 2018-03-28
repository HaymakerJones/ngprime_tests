import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFormatterComponent } from './child-formatter.component';

describe('ChildFormatterComponent', () => {
  let component: ChildFormatterComponent;
  let fixture: ComponentFixture<ChildFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
