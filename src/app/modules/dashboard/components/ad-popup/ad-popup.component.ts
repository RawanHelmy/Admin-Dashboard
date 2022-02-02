import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  type = '1'; //check current ad type  image or video
  start: FormControl = new FormControl(); // start date
  end: FormControl = new FormControl(); // end date
  constructor(
    public dialog: MatDialogRef<AdPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ad,
    public Dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.data) {
      this.data = {
        // set default data in creatation mode
        image: '',
        video: null,
        from_time: new Date(),
        to_time: new Date(),
      };
    } else {
      this.type = this.data?.video ? '2' : '1'; // set ad type in edit mode
    }
    this.start.setValue(
      new Date(this.data?.from_time ? this.data?.from_time : new Date())
    );
    this.end.setValue(
      new Date(this.data?.to_time ? this.data?.to_time : new Date())
    );
  }
  onTypeChange(e: any) {
    // clear values on type change
    if (e == 1) this.data.video = '';
    else this.data.image = '';
  }
  onImageChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.data.image = reader.result as string;
      };
    }
  }
  onVideoChange(event: any) {
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
