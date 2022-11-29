import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {map, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
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
  readonly jobTagsForm: FormGroup = new FormGroup({});
  readonly jobTags$: Observable<JobTagsModel[]> = this._jobsService.getAllTags().pipe(tap(data => this.setJobTagForm(data)));


  public selectedItem: string[] = [];

  constructor(private _jobsService: JobsService) {
  }

  onJobFormSubmitted(jobForm: FormGroup, tagsForm: FormGroup, tags: JobTagsModel[]): void {
    console.log("title: " + jobForm.get('title')?.value);
    console.log("description" + jobForm.get('description')?.value);
    console.log("selected tags:");
    for (let i = 0; i < tags.length; i++) {
      if (tagsForm.get(tags[i].name)?.value) {
        console.log(tags[i].id);
      }
    }
    this._jobsService.createJobPost({
      title: jobForm.get('title')?.value,
      description: jobForm.get('description')?.value,
      jobTagIds: tags.filter(data => tagsForm.get(data.name)?.value).map((data) => {
        return data.id
      })
    }).subscribe();


  }

  setJobTagForm(tags: JobTagsModel[]): void {
    for (let i = 0; i < tags.length; i++) {
      this.jobTagsForm.addControl(tags[i].name, new FormControl(false))
    }
  }
}
