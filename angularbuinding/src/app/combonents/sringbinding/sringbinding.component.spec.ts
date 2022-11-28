import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SringbindingComponent } from './sringbinding.component';

describe('SringbindingComponent', () => {
  let component: SringbindingComponent;
  let fixture: ComponentFixture<SringbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SringbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SringbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
