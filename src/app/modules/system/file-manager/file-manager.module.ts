import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { InfoFolderComponent } from './file-manager/info-folder/info-folder.component';
import { EditFolderComponent } from './file-manager/edit-folder/edit-folder.component';
import { EditFileComponent } from './file-manager/edit-file/edit-file.component';
import { UploadFileComponent } from './file-manager/upload-file/upload-file.component';
import { PurgeCacheComponent } from './file-manager/purge-cache/purge-cache.component';
import { PermissionFolderComponent } from './file-manager/permission-folder/permission-folder.component';
import { MoveFileComponent } from './file-manager/move-file/move-file.component';
import { EditBitlinkComponent } from './file-manager/edit-bitlink/edit-bitlink.component';
import { CopyFileComponent } from './file-manager/copy-file/copy-file.component';



@NgModule({
  declarations: [
    FileManagerComponent,
    InfoFolderComponent,
    EditFolderComponent,
    EditFileComponent,
    UploadFileComponent,
    PurgeCacheComponent,
    PermissionFolderComponent,
    MoveFileComponent,
    EditBitlinkComponent,
    CopyFileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FileManagerModule { }
