import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductView } from './modal-product-view';

describe('ModalProductView', () => {
  let component: ModalProductView;
  let fixture: ComponentFixture<ModalProductView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProductView],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProductView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
