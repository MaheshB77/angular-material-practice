import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiTaskComponent } from './sai-task.component';

describe('SaiTaskComponent', () => {
  let component: SaiTaskComponent;
  let fixture: ComponentFixture<SaiTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
