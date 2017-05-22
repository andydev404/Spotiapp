import { TestBed, inject } from '@angular/core/testing';

import { MusicaService } from './musica.service';

describe('MusicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicaService]
    });
  });

  it('should ...', inject([MusicaService], (service: MusicaService) => {
    expect(service).toBeTruthy();
  }));
});
