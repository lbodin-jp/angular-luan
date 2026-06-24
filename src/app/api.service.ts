import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface HealthResponse {
  status: string;
  service: string;
}

/**
 * Calls the local Python API (http://localhost:5000), which lives in a separate
 * project. Requests use relative `/api/...` paths and go through the `/api`
 * dev-server proxy (see proxy.conf.json) so the same code keeps working in
 * production behind a reverse-proxy.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api';

  health(): Observable<HealthResponse> {
    return this.http.get<HealthResponse>(`${this.baseUrl}/health`);
  }
}
