import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { DashfluxAppComponent } from '../app/dashflux.component';

beforeEachProviders(() => [DashfluxAppComponent]);

describe('App: Dashflux', () => {
  it('should create the app',
      inject([DashfluxAppComponent], (app: DashfluxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'dashflux works!\'',
      inject([DashfluxAppComponent], (app: DashfluxAppComponent) => {
    expect(app.title).toEqual('dashflux works!');
  }));
});
