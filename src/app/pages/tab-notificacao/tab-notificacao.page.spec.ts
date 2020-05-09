import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabNotificacaoPage } from './tab-notificacao.page';

describe('TabNotificacaoPage', () => {
  let component: TabNotificacaoPage;
  let fixture: ComponentFixture<TabNotificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabNotificacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabNotificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
