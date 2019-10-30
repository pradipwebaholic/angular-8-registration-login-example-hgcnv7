import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CcTableComponent } from './c/cc-table/cc-table.component';
import { AlertService, AuthenticationService } from '../_services';

@NgModule({
  imports: [
    CommonModule
    ,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule
  ],
  declarations: [CcTableComponent],
  exports:[ 
    
    MatSortModule,
    FormsModule,
    HttpClientModule,MatTableModule,
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,CcTableComponent,CommonModule,]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthenticationService  ]
    };
  }
}