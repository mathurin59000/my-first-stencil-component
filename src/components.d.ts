/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface MyFirstStencilComponent {
      'firstname': string;
      'lastname': string;
    }
  }

  interface HTMLMyFirstStencilComponentElement extends StencilComponents.MyFirstStencilComponent, HTMLStencilElement {}

  var HTMLMyFirstStencilComponentElement: {
    prototype: HTMLMyFirstStencilComponentElement;
    new (): HTMLMyFirstStencilComponentElement;
  };
  interface HTMLElementTagNameMap {
    'my-first-stencil-component': HTMLMyFirstStencilComponentElement;
  }
  interface ElementTagNameMap {
    'my-first-stencil-component': HTMLMyFirstStencilComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-first-stencil-component': JSXElements.MyFirstStencilComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyFirstStencilComponentAttributes extends HTMLAttributes {
      'firstname'?: string;
      'lastname'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;