import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoleModel} from '../models/role.model';
import {UserModel} from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllRoles(): Observable<RoleModel[]> {
    return this._httpClient.get<RoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }

  createUser(user: Omit<UserModel, 'id'>): Observable<UserModel> {
    return this._httpClient.post<UserModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/user', user);
  }
}
