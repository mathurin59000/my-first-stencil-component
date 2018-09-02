import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'my-first-stencil-component',
    styleUrl: 'my-first-stencil-component.css'
})

export class MyFirstStencilComponent {

    @Prop() firstname: string;
    @Prop() lastname: string;

    render() {
        return(
            <div class="name">Mon nom est { this.firstname } { this.lastname }</div>
        );
    }
}