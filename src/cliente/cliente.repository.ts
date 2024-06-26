import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteRepository {

  private clientes = [];

  async salvar(cliente) {
    this.clientes.push(cliente);
  }

  async listar() {
    return this.clientes;
  }
}
