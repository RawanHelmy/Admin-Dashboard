import { AddAD, DeleteAD, EditAD } from '../store/ads.actions';

import { Ad } from '../models/ads.model';
import { AdPopupComponent } from '../components/ad-popup/ad-popup.component';
import { Injectable } from '@angular/core';
import { LoadingService } from '../../shared/services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private loadingService: LoadingService,
    private AdsStore: Store<{ AdList: { ads: Ad[] } }>,
    public Dialog: MatDialog
  ) {}
  getAll() {
    return this.AdsStore.select('AdList').pipe(
      map((res: { ads: Ad[] }) => {
        return res.ads;
      })
    );
  }
  addNew() {
    this.Dialog.open(AdPopupComponent)
      .afterClosed()
      .subscribe((ad) => {
        if (ad) {
          this.AdsStore.dispatch(new AddAD(ad));
        }
      });
  }
  editAd(ad: Ad, index: number) {
    this.Dialog.open(AdPopupComponent, {
      data: { ...ad },
    })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.AdsStore.dispatch(new EditAD({ object: res, index: index }));
        }
      });
  }
  deleteAd(index: number) {
    this.AdsStore.dispatch(new DeleteAD(index));
  }
}
