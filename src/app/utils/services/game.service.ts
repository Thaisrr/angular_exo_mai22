import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {catchError, Observable, of, tap} from "rxjs";
import {Game} from "../models/Game";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  url = environment.api + '/games';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Game[]> {
      return this.http.get<Game[]>(this.url).pipe(
        catchError(err => {
          console.warn(err);
          alert(`Quelque chose s'est mal passé`);
          return of([]);
        })
      )
  }

  getById(id: number): Observable<Game | undefined> {
    return this.http.get<Game>(`${this.url}/${id}`).pipe(
      catchError(err => {
        console.warn(err);
        alert(`Quelque chose s'est mal passé`);
        return of(undefined);
      })
    )
  }

  create(game: Game): Observable<Game | undefined> {
    return this.http.post<Game>(this.url, game).pipe(
      tap(() => alert('Jeu créé avec succès')),
      catchError(err => {
        console.warn(err);
        alert(`Quelque chose s'est mal passé`);
        return of(undefined);
      })
    )
  }

  update(game: Game): Observable<Game | undefined> {
    return this.http.put<Game>( `${this.url}/${game.id}`, game).pipe(
      tap(() => alert('Jeu modifié avec succès')),
      catchError(err => {
        console.warn(err);
        alert(`Quelque chose s'est mal passé`);
        return of(undefined);
      })
    )
  }

  delete(id: number): Observable<{} | null> {
    return this.http.delete<{}>( `${this.url}/${id}`).pipe(
      tap(() => alert('Jeu supprimé avec succès')),
      catchError(err => {
        console.warn(err);
        alert(`Quelque chose s'est mal passé`);
        return of(null);
      })
    )
  }



}
