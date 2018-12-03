import { TestBed } from '@angular/core/testing';

import { FacultadesService } from './facultades.service';

describe('FacultadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultadesService = TestBed.get(FacultadesService);
    expect(service).toBeTruthy();
  });
});
