import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldDetailsComponent } from './hello-world-details.component';

describe('HelloWorldDetailsComponent', () => {
  let component: HelloWorldDetailsComponent;
  let fixture: ComponentFixture<HelloWorldDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
