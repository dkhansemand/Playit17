import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTerminalComponent } from './games-terminal.component';

describe('GamesTerminalComponent', () => {
  let component: GamesTerminalComponent;
  let fixture: ComponentFixture<GamesTerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesTerminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
