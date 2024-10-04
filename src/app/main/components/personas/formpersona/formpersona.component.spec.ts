import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpersonaComponent } from './formpersona.component';

describe('FormpersonaComponent', () => {
  let component: FormpersonaComponent;
  let fixture: ComponentFixture<FormpersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormpersonaComponent]
    });
    fixture = TestBed.createComponent(FormpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
