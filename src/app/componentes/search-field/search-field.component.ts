import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { FocusService } from 'src/app/services/focus.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],
})
export class SearchFieldComponent implements AfterViewInit {
  campoBusca: string = '';

  @ViewChild('inputField', { static: true })
  inputField: ElementRef<HTMLInputElement>;

  constructor(private focusService: FocusService) {}

  @HostListener('keydown', ['$event'])
  manageKeys(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.focusService.moveFocus(-1);
        event.preventDefault();
        break;
      case 'ArrowDown':
        this.focusService.moveFocus(1);
        event.preventDefault();
        break;
      default:
        this.handleInputKeydown(event);
    }
  }

  handleInputKeydown(event: KeyboardEvent) {
console.log('ArrowUp')  }

  ngAfterViewInit() {
    this.focusService.registerItem(this.inputField.nativeElement);
  }

  buscarLivros() {
    this.pesquisaRealizada.emit(this.campoBusca);
    this.focusService.moveFocus(0); // Focar no input após a pesquisa
  }

  @Output() pesquisaRealizada = new EventEmitter<string>();
}
