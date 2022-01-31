import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
];
@NgModule({
  declarations: [],
  exports: [...modules],
})
export class MaterialModule {}
