import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  runPythonCode(code: string): Observable<{output: string, error: string}> {
    return this.http.post<{output: string, error: string}>(
        `${this.baseUrl}/run-python`,
        {code}
    );
  }
}
