import { TestBed } from '@angular/core/testing';

import { CursosSerService } from './cursos-ser.service';

describe('CursosSerService', () => {
  let service: CursosSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
