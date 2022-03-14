import { TestBed } from '@angular/core/testing';

import { NgxIobserverService } from './ngx-iobserver.service';

describe('NgxIobserverService', () => {
  let service: NgxIobserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIobserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
