const SPRITES =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites';

/** Extrae el id numérico del final de una URL de la PokéAPI (…/pokemon/25/). */
export function idFromUrl(url: string): number {
  const parts = url.split('/').filter(Boolean);
  return Number(parts[parts.length - 1]);
}

export const pokemonSprite = (id: number | string) =>
  `${SPRITES}/pokemon/other/official-artwork/${id}.png`;

export const itemSprite = (name: string) => `${SPRITES}/items/${name}.png`;

/** El sprite de una baya es el del objeto "<nombre>-berry". */
export const berrySprite = (name: string) => itemSprite(`${name}-berry`);

/** Quita guiones: "special-attack" -> "special attack". */
export const prettify = (text: string) => text.replace(/-/g, ' ');
