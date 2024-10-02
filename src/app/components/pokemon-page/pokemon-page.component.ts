import {Component, inject, Input} from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Pokemon} from "../../models/pokemon.model";
import {PokemonNamePipe} from "../../pipes/pokemon-name/pokemon-name.pipe";
import {PokemonHeightPipe} from "../../pipes/pokemon-height/pokemon-height.pipe";
import {PokemonWeightPipe} from "../../pipes/pokemon-weight/pokemon-weight.pipe";
import {ImageService} from "../../services/image-service/image.service";

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    PokemonNamePipe,
    PokemonHeightPipe,
    PokemonWeightPipe
  ],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.scss'
})
export class PokemonPageComponent {
  public imageService: ImageService = inject(ImageService);

  @Input()
  public pokemon$: Observable<Pokemon> = of({name: 'unknown', weight: -1, height: -1, id: 0});
}
