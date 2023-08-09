import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_BASE = 'http://localhost:8080/api/1.0/simulator';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService {
  constructor(private http: HttpClient) {}

  simulatePotential(): Observable<unknown> {
    return this.http.post(`${URL_BASE}/potential`, {
      phie_average: 1,
      phie_desvest: 0.02,
      h_min: 10,
      h_med: 30,
      h_max: 50,
      area: 2,
      iterations: 4000,
    });
  }
}
