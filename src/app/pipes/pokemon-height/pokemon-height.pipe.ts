import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonHeight',
  standalone: true
})
export class PokemonHeightPipe implements PipeTransform {

  transform(height: number): string {
    return String(height * 10) + ' cm';
  }

}
