import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CriaClienteDTO {

  @IsNotEmpty({ message: 'Nome da empresa é inválido ou vazio'})
  Empresa: string;
  @IsNotEmpty({ message: 'Nome do responsavel é inválido ou vazio'})
  Responsavel: string;
  @IsString({ message: 'Endereço é inválido ou vazio'})
  Endereco: string;

  @IsEmail(undefined, { message: 'E-mail é inválido ou vazio'})
  Email: string;

  @IsNumber({}, { message: 'Numero de telefone inválido ou vazio' })
  Telefone: number;
}