import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {map, Observable, of} from 'rxjs';
import {filter} from 'rxjs/operators';
import {JobTagsModel} from '../../models/job-tags.model';
import {JobsService} from '../../services/jobs.service';

@Component({
  selector: 'app-job-post',
  styleUrls: ['./job-post.component.scss'],
  templateUrl: './job-post.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobPostComponent {
  readonly jobForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
  });
  readonly jobTags$: Observable<JobTagsModel[]> = this._jobsService.getAllTags();


  public selectedItem: string[] = [];
  constructor(private _jobsService: JobsService) {
  }

  onJobFormSubmitted(jobForm: FormGroup): void {
    this._jobsService.createJobPost({
      title: jobForm.get('title')?.value,
      description: jobForm.get('description')?.value,
      jobTagIds: this.selectedItem
    }).subscribe();

  }

  tagChanged(e: any, tag: string): void {
    if (e.checked) {
      console.log(tag + 'checked');
      this.selectedItem.push(tag);
      console.log(this.selectedItem)
    } else {
      this.selectedItem = this.selectedItem.filter(data => data != tag);
      console.log(this.selectedItem)
    }
  }
}
