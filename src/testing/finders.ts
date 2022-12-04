import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Type} from '@angular/core';

export function query<T>(fixture: ComponentFixture<T>, selector: string) {
  const debugElement = fixture.debugElement.query(By.css(selector));
  if (!debugElement) {
    throw new Error(`query: Element with ${selector} not found.`);
  }
  return debugElement;
}

export function queryById<T>(fixture: ComponentFixture<T>, testId: string) {
  const selector = `[data-testid="${testId}"]`;
  return fixture.debugElement.query(By.css(selector));
}

export function queryAll<T>(fixture: ComponentFixture<T>, selector: string) {
  return fixture.debugElement.queryAll(By.css(selector));
}

export function queryAllDirective<T, D>(fixture: ComponentFixture<T>, directive: Type<D>) {
  return fixture.debugElement.queryAll(By.directive(directive));
}

export function getText<T>(fixture: ComponentFixture<T>, testId: string) {
  const debugElement = queryById(fixture, testId);
  const element: HTMLElement = debugElement.nativeElement;
  return element.textContent;
}
