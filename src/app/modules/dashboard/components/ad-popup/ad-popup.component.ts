import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { Ads } from '../../models/ads.model';

@Component({
  selector: 'app-ad-popup',
  templateUrl: './ad-popup.component.html',
  styleUrls: ['./ad-popup.component.scss'],
})
export class AdPopupComponent implements OnInit {
  show = false;
  start = new FormControl(new Date());
  end = new FormControl(new Date());
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });
  constructor(
    public dialog: MatDialogRef<AdPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ads,
    public Dialog: MatDialog
  ) {}

  ngOnInit(): void {}
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
}
