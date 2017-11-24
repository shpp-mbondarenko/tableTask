import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrBlockComponent } from './tr-block.component';

describe('TrBlockComponent', () => {
  let component: TrBlockComponent;
  let fixture: ComponentFixture<TrBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
