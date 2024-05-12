import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FocusService {
  private _focusedIndex = new BehaviorSubject<number>(0);
  private _items: HTMLElement[] = [];

  get focusedIndex$() {
    return this._focusedIndex.asObservable();
  }

  registerItem(item: HTMLElement) {
    this._items.push(item);
    this.focusFirstItem();
  }

  unregisterItem(item: HTMLElement) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }
  }

  moveFocus(direction: number) {
    let nextIndex = this._focusedIndex.getValue() + direction;
    if (nextIndex < 0) {
      nextIndex = 0;
    } else if (nextIndex >= this._items.length) {
      nextIndex = this._items.length - 1;
    }
    this._focusedIndex.next(nextIndex);
    this._items[nextIndex].focus();
  }

  focusFirstItem() {
    if (this._items.length > 0) {
      this._focusedIndex.next(0);
      this._items[0].focus();
    }
  }
}