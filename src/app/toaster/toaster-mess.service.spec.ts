import { TestBed } from '@angular/core/testing';

import { ToasterMessService } from './toaster-mess.service';

describe('ToasterMessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasterMessService = TestBed.get(ToasterMessService);
    expect(service).toBeTruthy();
  });
});
