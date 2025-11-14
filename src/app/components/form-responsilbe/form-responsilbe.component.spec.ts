import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResponsilbeComponent } from './form-responsilbe.component';

describe('FormResponsilbeComponent', () => {
  let component: FormResponsilbeComponent;
  let fixture: ComponentFixture<FormResponsilbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormResponsilbeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResponsilbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
