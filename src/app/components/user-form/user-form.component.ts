import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {RoleModel} from '../../models/role.model';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  styleUrls: ['./user-form.component.scss'],
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly userForm: FormGroup = new FormGroup({email: new FormControl(), role: new FormControl()});
  readonly roles$: Observable<RoleModel[]> = this._usersService.getAllRoles();

  constructor(private _usersService: UsersService) {
  }

  onUserFormSubmitted(userForm: FormGroup): void {
    this._usersService.createUser({
      email: userForm.get('email')?.value,
      roleId: userForm.get('role')?.value
    }).subscribe();
  }
}
