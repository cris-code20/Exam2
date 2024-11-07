import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManejadorPage } from './manejador.page';

describe('ManejadorPage', () => {
  let component: ManejadorPage;
  let fixture: ComponentFixture<ManejadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
