import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public getPokemonImageUrl(pokemonId: number): string {
    return 'pokemon/' + pokemonId + '.png';
  }
}
