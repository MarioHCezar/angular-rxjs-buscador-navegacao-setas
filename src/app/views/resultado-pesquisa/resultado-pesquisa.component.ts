import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FocusService } from 'src/app/services/focus.service';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.css'],
})
export class ResultadoPesquisaComponent implements AfterViewInit {
  focusedIndex: number = 0;
  @Input() listaLivros;
  @Input() telaInicial;
  /*   @ViewChild('livroDaLista', { static: true, read: ElementRef })
  livroDaLista: ElementRef<HTMLElement>; */

  @ViewChildren('livroDaLista') livroDaLista: QueryList<
    ElementRef<HTMLElement>
  >;
  constructor(private focusService: FocusService) {}

  ngAfterViewInit() {
    if (this.livroDaLista) {
      this.focusService.moveFocus(0);
      this.focusedIndex = 0;
    }
  }
}
