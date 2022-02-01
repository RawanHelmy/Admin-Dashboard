import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  constructor(
    public dialog: MatDialogRef<AdPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ads,
    public Dialog: MatDialog
  ) {}

  ngOnInit(): void {}
}
