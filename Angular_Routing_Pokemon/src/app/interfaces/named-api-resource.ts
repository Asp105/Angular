export interface NamedApiResource {
  name: string;
  url: string;
}

/** Respuesta paginada genérica de los listados de la PokéAPI. */
export interface PagedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
