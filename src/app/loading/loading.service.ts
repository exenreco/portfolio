import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoadingState } from './loading.state.interface';


@Injectable({ providedIn: 'root' })
export class LoadingService {

  private state$$ = new BehaviorSubject<LoadingState>({ isLoading: false });

  // Add back the isLoading$ for compatibility
  isLoading$ = this.state$$.pipe(map(state => state.isLoading));
  state$ = this.state$$.asObservable();

  show(message?: string) {
    this.state$$.next({
      isLoading: true,
      message: message || '' // no message by default
    });
  }

  hide() {
    this.state$$.next({ isLoading: false });
  }
}
