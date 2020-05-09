import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabCarteiraPage } from './tab-carteira.page';

describe('TabCarteiraPage', () => {
  let component: TabCarteiraPage;
  let fixture: ComponentFixture<TabCarteiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabCarteiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabCarteiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
