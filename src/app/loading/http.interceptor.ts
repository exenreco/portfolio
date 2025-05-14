import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.show(`Loading:
      <ul class="list">
        <li>url: ${request.url}</li>
        <li>Method: ${request.method}</li>
      </ul>
    `);

    return next.handle(request).pipe(
      finalize(() => this.loadingService.hide())
    );
  }
}
