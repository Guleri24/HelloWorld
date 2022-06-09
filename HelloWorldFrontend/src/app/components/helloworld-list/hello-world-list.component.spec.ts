import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldListComponent } from './hello-world-list.component';

describe('HelloWorldListComponent', () => {
  let component: HelloWorldListComponent;
  let fixture: ComponentFixture<HelloWorldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
