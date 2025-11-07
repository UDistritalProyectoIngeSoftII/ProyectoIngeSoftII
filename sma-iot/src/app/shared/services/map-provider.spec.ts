import { TestBed } from '@angular/core/testing';

import { MapProvider } from './map-provider';

describe('MapProvider', () => {
  let service: MapProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
