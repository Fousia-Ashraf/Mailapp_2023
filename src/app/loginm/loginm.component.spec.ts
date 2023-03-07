import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmComponent } from './loginm.component';

describe('LoginmComponent', () => {
  let component: LoginmComponent;
  let fixture: ComponentFixture<LoginmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
