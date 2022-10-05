import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { PermissionComponent } from './permission/permission.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { EditPermissionComponent } from './permission/edit-permission/edit-permission.component';
import { EditPasswordComponent } from './user/edit-password/edit-password.component';



@NgModule({
  declarations: [
    UserComponent,
    RoleComponent,
    EditRoleComponent,
    PermissionComponent,
    EditUserComponent,
    EditPermissionComponent,
    EditPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserMangerModule { }
