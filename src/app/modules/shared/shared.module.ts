import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

const modules = [CommonModule, MaterialModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
