import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName',
  standalone: true
})
export class PokemonNamePipe implements PipeTransform {

  transform(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

}
