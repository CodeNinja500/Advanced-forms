import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JobTagsModel} from '../models/job-tags.model';
import {JobPostModel} from '../models/job-post.model';

@Injectable()
export class JobsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllTags(): Observable<JobTagsModel[]> {
    return this._httpClient.get<JobTagsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }

  createJobPost(jobPost: Omit<JobPostModel,'id'>): Observable<JobPostModel> {
    return this._httpClient.post<JobPostModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts', jobPost);
  }
}
