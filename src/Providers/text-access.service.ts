import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextAccessService {
  private textSubject = new BehaviorSubject<Record<string, HTMLElement | null>>({
    text: null,
    main: null // Add a property for textElement2
  });

  text$ = this.textSubject.asObservable();

  setTextElement(elementName: string, element: HTMLElement | null) {
    this.textSubject.next({
      ...this.textSubject.getValue(),
      [elementName]: element // Update the specific element property
    });
  }
}