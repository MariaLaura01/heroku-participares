import * as moment from 'moment';

export class Escola
{
  codigo: number;
  nome: string;
  endereco: string;

  static toJson(escola: Escola) : any
  {
    return {
      codigo: escola.codigo,
      nome: escola.nome,
      endereco: escola.endereco,
    };
  }
}

export class Evento
{
  codigo: number;
  codigo_escola: number;
  nome: string;
  descricao: string;
  data: Date;
  local: string;
  escola = new Escola();

  static toJson(evento: Evento) : any
  {
    return {
      codigo: evento.codigo,
      codigo_escola: evento.codigo_escola,
      nome: evento.nome,
      descricao: evento.descricao,
      data: moment(evento.data).format('DD/MM/YYYY'),
      local: evento.local,
      escola: evento.escola,
    };
  }
}

export class Imagem
{
  codigo: number;
  codigo_do_evento: number;
  link: string;

  static toJson(imagem: Imagem)
  {
    return {
      codigo: imagem.codigo,
      codigo_do_evento: imagem.codigo_do_evento,
      link: imagem.link,
    };
  }
}

export class Usuario
{
  login: string;
  senha: string;
  tipo: string;
  escola = new Escola();

  static toJson(usuario: Usuario)
  {
    return {
      login: usuario.login,
      senha: usuario.senha,
      tipo: usuario.tipo,
      escola: usuario.escola,
    };
  }
}
