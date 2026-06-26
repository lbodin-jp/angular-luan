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
      map((jeux) => jeux),
      catchError((error) => {
        console.error('Error fetching games:', error);
        return of([]);
      })
    );
  }

  getRecentGames(): Observable<Jeu[]> {
    return this.httpService.get<Jeu[]>('/api/jeux/récent').pipe(
      map((jeux) => jeux),
      catchError((error) => {
        console.error('Error fetching recent games:', error);
        return of([]);
      })
    );
  }

  getFavoriteGames(): Observable<Jeu[]> {
    return this.httpService.get<Jeu[]>('/api/jeux/tri/favoris').pipe(
      map((jeux) => jeux),
      catchError((error) => {
        console.error('Error fetching favorite games:', error);
        return of([]);
      })
    );
  }

  updateFavorite(id: number, favoris: boolean): Observable<Jeu> {
    return this.httpService.put<Jeu>(`/api/jeux/favoris/${id}`, { favoris }).pipe(
      catchError((error) => {
        console.error('Error updating favorite:', error);
        return of({} as Jeu);
      })
    );
  }

  createJeu(jeu: Partial<Jeu>): Observable<void> {
    return this.httpService.post<void>(`/api/jeux`, jeu).pipe(
      catchError((error) => {'Error while creating'
      return of()
      }
    ))

  }


}

