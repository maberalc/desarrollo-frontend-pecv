import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonListResponse } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient: HttpClient) { }

  getPokemons(limit: number = 20, offset: number = 0): Observable<PokemonListResponse> {
    return this.httpClient.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemon(id: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
