import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.scss',
  shadow: true,
})
export class HelloWorld {
  @Prop() text: string;

  @Prop() message: string;

  render() {
    return (
      <Host>
        <div class="cmp-helloworld">
          <h2 class="cmp-helloworld__title">Hello, World!</h2>
          <div class="cmp-helloworld__item">
            <p class="cmp-helloworld__item-label">Text property:</p>
            <pre class="cmp-helloworld__item-output" >I'm {this.text}</pre>
          </div>
          <div class="cmp-helloworld__item" >
            <p class="cmp-helloworld__item-label">Model message:</p>
            <pre class="cmp-helloworld__item-output">{this.message}</pre>
          </div>
        </div>
      </Host>
    );
  }

}
