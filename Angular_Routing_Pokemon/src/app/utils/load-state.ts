import { catchError, map, Observable, of, startWith } from 'rxjs';

export type LoadState<T> =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ok'; data: T };

/** Convierte una petición en un flujo loading -> ok | error. */
export function toLoadState<T>(source$: Observable<T>): Observable<LoadState<T>> {
  return source$.pipe(
    map((data) => ({ status: 'ok', data }) as LoadState<T>),
    startWith({ status: 'loading' } as LoadState<T>),
    catchError(() => of({ status: 'error' } as LoadState<T>)),
  );
}
