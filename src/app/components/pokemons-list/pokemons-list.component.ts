import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { NamedAPIResource } from '../../models/pokemon.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.css',
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0.2
        })
      ),
      transition('void => *', animate(350))
    ])
  ]
})
export class PokemonsListComponent {

  pokemons: NamedAPIResource[] | undefined = undefined;
  count: number = 0;
  limit: number = 10;
  offset: number = 0;
  listMode: boolean = false;

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(): void {
    this.pokemonsService.getPokemons(this.limit, this.offset).subscribe((pokemons) => {
      this.count = pokemons.count;
      this.pokemons = pokemons.results;
    });
  }

  onPageChange(event: any): void {
    console.log(event);
    this.pokemons = undefined;
    this.limit = event.pageSize;
    this.offset = event.pageIndex * event.pageSize;
    this.pokemonsService.getPokemons(this.limit, this.offset).subscribe((pokemons) => {
      this.pokemons = pokemons.results;
    });
  }

  setListMode(): void {
    this.listMode = true;
  }

  setCardMode(): void {
    this.listMode = false;
  }

}
