import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { Ad } from '../../models/ads.model';

@Component({
  selector: 'app-ad-popup',
  templateUrl: './ad-popup.component.html',
  styleUrls: ['./ad-popup.component.scss'],
})
export class AdPopupComponent implements OnInit {
  show = false;
  start: FormControl = new FormControl();
  end: FormControl = new FormControl();
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });
  constructor(
    public dialog: MatDialogRef<AdPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ad,
    public Dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        image: '',
        video: null,
        from_time: new Date(),
        to_time: new Date(),
      };
    }
    this.start.setValue(
      new Date(this.data?.from_time ? this.data?.from_time : new Date())
    );
    this.end.setValue(
      new Date(this.data?.to_time ? this.data?.to_time : new Date())
    );
  }
  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.data.image = reader.result as string;
        this.myForm.patchValue({
          fileSource: reader.result,
        });
      };
    }
  }
  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.data.video = (<FileReader>event.target).result;
      };
    }
  }
  save() {
    this.dialog.close(this.data);
  }
  cancel() {
    this.dialog.close();
  }
}
