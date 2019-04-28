import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMadeComponent } from './quote-made.component';

describe('QuoteMadeComponent', () => {
  let component: QuoteMadeComponent;
  let fixture: ComponentFixture<QuoteMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
