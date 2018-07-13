import { TestBed, inject } from '@angular/core/testing';

import { MemberDetailService } from './member-detail.service';

describe('MemberDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberDetailService]
    });
  });

  it('should be created', inject([MemberDetailService], (service: MemberDetailService) => {
    expect(service).toBeTruthy();
  }));
});
