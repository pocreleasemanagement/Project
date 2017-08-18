import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleaseRequestComponent } from './new-release-request.component';

describe('NewReleaseRequestComponent', () => {
  let component: NewReleaseRequestComponent;
  let fixture: ComponentFixture<NewReleaseRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReleaseRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReleaseRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
