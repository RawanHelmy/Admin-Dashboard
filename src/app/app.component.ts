import { Component, OnInit } from '@angular/core';

import { AutoLogin } from './modules/login/store/login.action';
import { LoadingService } from './modules/shared/services/loading.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public loadingService: LoadingService,
    public store: Store<{ Login: { token: any } }>
  ) {}
  ngOnInit() {
    this.store.dispatch(new AutoLogin());
  }
}
