import { NamedApiResource } from './named-api-resource';

export interface ItemDetailResponse {
  id: number;
  name: string;
  cost: number;
  fling_power: number | null;
  fling_effect: NamedApiResource | null;
  attributes: NamedApiResource[];
  category: NamedApiResource;
  effect_entries: { effect: string; short_effect: string; language: NamedApiResource }[];
  flavor_text_entries: { text: string; language: NamedApiResource }[];
  sprites: { default: string | null };
  held_by_pokemon: { pokemon: NamedApiResource }[];
}
