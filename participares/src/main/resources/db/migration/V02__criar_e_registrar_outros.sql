CREATE TABLE eventos (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	codigo_da_escola BIGINT(20),
	nome VARCHAR(100),
	descricao VARCHAR(500),
	data DATE NOT NULL,
	local VARCHAR(100) NOT NULL,
    FOREIGN KEY(codigo_da_escola) REFERENCES escolas(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO eventos (codigo_da_escola, nome, data, local) 
       VALUES ('2', 'Festa da Primavera', '2022-09-22', 'No campus');
INSERT INTO eventos (codigo_da_escola, nome, data, local) 
       VALUES ('3', 'Dia do Indio', '2022-04-19', 'No campus');
INSERT INTO eventos (codigo_da_escola, nome, data, local) 
       VALUES ('3', 'Festa junina', '2022-06-24', 'No campus');
INSERT INTO eventos (codigo_da_escola, nome, data, local) 
       VALUES ('3', 'Dia do Folclore', '2022-08-08', 'No campus');
INSERT INTO eventos (codigo_da_escola, nome, data, local) 
       VALUES ('4', 'Desfile Natalino', '2022-12-20', 'No campus');

CREATE TABLE imagens(
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    codigo_do_evento BIGINT(20) NOT NULL,
	link VARCHAR(500) NOT NULL,
    FOREIGN KEY(codigo_do_evento) REFERENCES eventos(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO imagens(codigo_do_evento, link)
	VALUES ('1', 'imagem_1');
INSERT INTO imagens(codigo_do_evento, link)
	VALUES ('1', 'imagem_2');
INSERT INTO imagens(codigo_do_evento, link)
	VALUES ('1', 'imagem_3');
INSERT INTO imagens(codigo_do_evento, link)
	VALUES ('1', 'imagem_4');
INSERT INTO imagens(codigo_do_evento, link)
	VALUES ('1', 'imagem_5');

CREATE TABLE usuarios (
	login VARCHAR(30) PRIMARY KEY,
	senha VARCHAR(500) NOT NULL,
        tipo VARCHAR(13),
	codigo_da_escola BIGINT(20),
    FOREIGN KEY(codigo_da_escola) REFERENCES escolas(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuarios (login, senha, codigo_da_escola) values ('default', '$2a$10$PeDmWleCJSSfnRpzCQ44NeANshvCUEiBO6/ptLFcGOxad6Ab5w/AC', 1);
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Isabel', '$2a$10$tPHUd0/T9/vbRjqFMjSjp.mg7j/wuZ/gk.YcsJVhDR1gGsH5Jmuz2','ADMINISTRADOR', '2');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Maria Regina', '$2a$10$WqjNrwh3jHYFqev6a/scL.Ikk5WszaZEgU4.RpjTEGxqCXJ.FsLgq','ADMINISTRADOR', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('usuario', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'COORDENADOR', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Eliane', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'COORDENADOR', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Suzana', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'COORDENADOR', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Julio', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'COORDENADOR', '4');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Marcio', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'COORDENADOR', '4');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Claudia', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'COORDENADOR', '4');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Luciana', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'ASSISTENTE', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Silvio', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'ASSISTENTE', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Catarina', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'ASSISTENTE', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Sandro', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'ASSISTENTE', '3');
INSERT INTO usuarios (login, senha, tipo, codigo_da_escola) values ('Cleudecir Carrasco', '$2a$10$ESraV6Gkx/KSIXLKYVVNSOVcPe.Pm5fUZAseEyr9EBEVSpTlZbZ0K', 'ASSISTENTE', '4');


CREATE TABLE permissoes (
	codigo BIGINT(20) PRIMARY KEY,
	descricao VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO permissoes (codigo, descricao)
	VALUES (1, 'ROLE_PESQUISAR_EVENTO');
INSERT INTO permissoes (codigo, descricao)
	VALUES (2, 'ROLE_CADASTRAR_EVENTO');
INSERT INTO permissoes (codigo, descricao)
	VALUES (3, 'ROLE_REMOVER_EVENTO');
INSERT INTO permissoes (codigo, descricao)
	VALUES (4, 'ROLE_ADMINISTRADOR');
INSERT INTO permissoes (codigo, descricao)
	VALUES (5, 'ROLE_COORDENADOR');
INSERT INTO permissoes (codigo, descricao)
	VALUES (6, 'ROLE_ASSISTENTE');

CREATE TABLE usuario_permissao (
	login VARCHAR(30) NOT NULL,
	codigo BIGINT(20) NOT NULL,
	PRIMARY KEY (login, codigo),
	FOREIGN KEY (login) REFERENCES usuarios(login),
	FOREIGN KEY (codigo) REFERENCES permissoes(codigo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO usuario_permissao (login, codigo)
	VALUES ('Isabel', 4);
INSERT INTO usuario_permissao (login, codigo)
	VALUES ('usuario', 1);
INSERT INTO usuario_permissao (login, codigo)
	VALUES ('usuario', 2);
INSERT INTO usuario_permissao (login, codigo)
	VALUES ('usuario', 3);
INSERT INTO usuario_permissao (login, codigo)
	VALUES ('usuario', 5);

INSERT INTO usuario_permissao (login, codigo)
	VALUES ('Luciana', 1);
INSERT INTO usuario_permissao (login, codigo)
	VALUES ('Luciana', 2);
INSERT INTO usuario_permissao (login, codigo)
	VALUES ('Luciana', 6);

INSERT INTO usuario_permissao (login, codigo)
	VALUES ('default', 1);