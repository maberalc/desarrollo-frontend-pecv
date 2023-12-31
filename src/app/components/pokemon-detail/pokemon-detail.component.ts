import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {

  pokemon: Pokemon | undefined;
  hp_stat: number | undefined;
  hp_percentage: number = 0;
  attack_stat: number | undefined;
  attack_percentage: number = 0;
  defense_stat: number | undefined;
  defense_percentage: number = 0;
  special_attack_stat: number | undefined;
  special_defense_percentage: number = 0;
  special_defense_stat: number | undefined;
  special_attack_percentage: number = 0;
  speed_stat: number | undefined;
  speed_percentage: number = 0;

  pokedexOpen: boolean = false;

  constructor(private pokemonService: PokemonsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.pokemonService.getPokemon(id).subscribe((pokemon) => {
        console.log(pokemon);
        this.pokemon = pokemon;
        this.hp_stat = pokemon.stats[0].base_stat;
        this.hp_percentage = Math.round((this.hp_stat / 255) * 100);
        this.attack_stat = pokemon.stats[1].base_stat;
        this.attack_percentage = Math.round((this.attack_stat / 255) * 100);
        this.defense_stat = pokemon.stats[2].base_stat;
        this.defense_percentage = Math.round((this.defense_stat / 255) * 100);
        this.special_attack_stat = pokemon.stats[3].base_stat;
        this.special_attack_percentage = Math.round((this.special_attack_stat / 255) * 100);
        this.special_defense_stat = pokemon.stats[4].base_stat;
        this.special_defense_percentage = Math.round((this.special_defense_stat / 255) * 100);
        this.speed_stat = pokemon.stats[5].base_stat;
        this.speed_percentage = Math.round((this.speed_stat / 255) * 100);
      });
    }
  }

  togglePokedex() {
    this.pokedexOpen = !this.pokedexOpen;
  }

}
