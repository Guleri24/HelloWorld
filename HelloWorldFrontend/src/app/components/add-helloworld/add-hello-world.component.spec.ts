import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelloWorldComponent } from './add-hello-world.component';

describe('AddHelloWorldComponent', () => {
  let component: AddHelloWorldComponent;
  let fixture: ComponentFixture<AddHelloWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelloWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
