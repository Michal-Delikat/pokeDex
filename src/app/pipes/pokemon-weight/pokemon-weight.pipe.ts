import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonWeight',
  standalone: true
})
export class PokemonWeightPipe implements PipeTransform {

  transform(weigth: number): string {
    return String(weigth * 0.1) + ' kg';
  }

}
