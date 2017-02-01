/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaxterService } from './baxter.service';

describe('BaxterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaxterService]
    });
  });

  it('should ...', inject([BaxterService], (service: BaxterService) => {
    expect(service).toBeTruthy();
  }));
});
