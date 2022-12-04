import {ComponentFixture} from '@angular/core/testing';
import {query, queryById} from './finders';

export function clickEvent<T>(fixture: ComponentFixture<T>,
                              selector: string,
                              withTestId = false,
                              event: unknown = null) {
  let element;
  if (withTestId) {
    element = queryById(fixture, selector);
  } else {
    element = query(fixture, selector);
  }
  element.triggerEventHandler('click', event);
}

export function clickElement<T>(fixture: ComponentFixture<T>,
                              selector: string,
                              withTestId = false) {
  let debugElement;
  if (withTestId) {
    debugElement = queryById(fixture, selector);
  } else {
    debugElement = query(fixture, selector);
  }
  const element = debugElement.nativeElement;
  element.click();
}
