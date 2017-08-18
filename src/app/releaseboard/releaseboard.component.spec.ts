import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseboardComponent } from './releaseboard.component';

describe('ReleaseboardComponent', () => {
  let component: ReleaseboardComponent;
  let fixture: ComponentFixture<ReleaseboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
