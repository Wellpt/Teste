import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClienteRepository } from './cliente.repository';

@Controller('/clientes')
export class ClienteController {
  
  constructor(private clienteRepository: ClienteRepository) {}

  @Post()
  async criarCliente(@Body() dadosCliente: string) {
    this.clienteRepository.salvar(dadosCliente);
    console.log('dadosCliente', dadosCliente);
    return { status: 'Cliente criado com sucesso!', dadosCliente };
  }

  @Get()
  async listarClientes() {
    return this.clienteRepository.listar();
  }
}