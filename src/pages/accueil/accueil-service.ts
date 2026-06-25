import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Jeu } from '../../shared/components/carte-jeu/jeu-model';


@Injectable({
  providedIn: 'root',
})
export class AccueilService {
  httpService = inject(HttpClient);

  getAllGames(): Observable<Jeu[]> {
    return this.httpService.get<Jeu[]>('/api/jeux').pipe(
      map((jeux) => {
        return jeux;
      }),
      catchError((error) => {
        console.error('Error fetching games:', error);
        return of([]);
      })
    );
  }
}

