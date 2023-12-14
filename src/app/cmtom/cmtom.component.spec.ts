import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmtomComponent } from './cmtom.component';

describe('CmtomComponent', () => {
  let component: CmtomComponent;
  let fixture: ComponentFixture<CmtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
