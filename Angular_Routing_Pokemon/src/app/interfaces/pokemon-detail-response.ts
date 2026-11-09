import { NamedApiResource } from './named-api-resource';

export interface PokemonDetailResponse {
  id: number;
  name: string;
  base_experience: number | null;
  height: number; // decímetros
  weight: number; // hectogramos
  abilities: { is_hidden: boolean; slot: number; ability: NamedApiResource }[];
  stats: { base_stat: number; effort: number; stat: NamedApiResource }[];
  types: { slot: number; type: NamedApiResource }[];
  sprites: {
    front_default: string | null;
    back_default: string | null;
    front_shiny: string | null;
    back_shiny: string | null;
    other: {
      'official-artwork': { front_default: string | null; front_shiny: string | null };
    };
  };
}
