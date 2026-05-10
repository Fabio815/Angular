import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Meu primeiro componente Angular';
  protected isDesabilitar = false;
  protected onClick() {
    this.isDesabilitar = !this.isDesabilitar;
  }

  protected count = signal(0);

  incrementar() {
    this.count.update(v => v += 1);
  }
  decrementar() {
    this.count.update(v => v -= 1);
  }
  resetar() {
    this.count.set(0);
  }
}
