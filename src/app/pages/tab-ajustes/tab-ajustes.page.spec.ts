import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabAjustesPage } from './tab-ajustes.page';

describe('TabAjustesPage', () => {
  let component: TabAjustesPage;
  let fixture: ComponentFixture<TabAjustesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAjustesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabAjustesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
