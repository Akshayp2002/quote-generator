import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitStatsComponent } from './git-stats.component';

describe('GitStatsComponent', () => {
  let component: GitStatsComponent;
  let fixture: ComponentFixture<GitStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
