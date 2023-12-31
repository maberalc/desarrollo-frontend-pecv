export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
}

export interface Pokemon {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  height: number;
  held_items: PokemonHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: PokemonMove[];
  name: string;
  order: number;
  species: NamedAPIResource;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

interface PokemonAbility {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonHeldItemVersion {
  rarity: number;
  version: NamedAPIResource;
}

interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
}

interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other?: {};
  versions?: {};
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}