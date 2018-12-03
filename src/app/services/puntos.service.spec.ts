import { TestBed } from '@angular/core/testing';

import { PuntosService } from './puntos.service';

describe('PuntosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PuntosService = TestBed.get(PuntosService);
    expect(service).toBeTruthy();
  });
});
