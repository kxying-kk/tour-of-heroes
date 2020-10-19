import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type': 'application/json'})
  };

  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes');
    // // log(`fetched heroes`);
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log(`Fetched Heroes`)),
        catchError(this.handleError<Hero[]>('getHero', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id = ${id}`))
    );
    // this.messageService.add(`HeroService: Featched hero id=${id}`);
    // // log(`Featched hero id=${id});
    // return of(HEROES.find(hero => hero.id = id));
  }

  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Updated Hero Id = ${hero.id}`)),
      catchError(this.handleError<any>('Updated Hero'))
    );
  }

  // addHero(hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(newHero: Hero) => this.log(`added hero w/ id = $(newHero.id)`),
  //     catchError(this.handleError<Hero>('addHero'))
  //   );
  // }
/** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
