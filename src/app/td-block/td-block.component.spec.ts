import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdBlockComponent } from './td-block.component';

describe('TdBlockComponent', () => {
  let component: TdBlockComponent;
  let fixture: ComponentFixture<TdBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
