import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormgroupNestedComponent } from './reactive-formgroup-nested.component';

describe('ReactiveFormgroupNestedComponent', () => {
  let component: ReactiveFormgroupNestedComponent;
  let fixture: ComponentFixture<ReactiveFormgroupNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormgroupNestedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormgroupNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
