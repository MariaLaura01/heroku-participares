CREATE TABLE escolas (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	endereco VARCHAR(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Centros de educação

INSERT INTO escolas (nome, endereco)
	VALUES ('Sem escola definida.', 'Não possui endereco.');

INSERT INTO escolas (nome, endereco)
	VALUES ('C.E. Aléscio Gonçalves dos Santos', 'Avenida Domingos Francisco de Paula – nº 21 – Jd. Pinheiros');

INSERT INTO escolas (nome, endereco)
	VALUES ('C.E. Fundecitrus', 'Avenida Otávio Micelli – nº 248 – Vila Melhado');

INSERT INTO escolas (nome, endereco)
	VALUES ('C.E. Piaquara – Profª Lectícia Vitta Filpi', 'Rua Bahia – 872 – Vila Xavier');

INSERT INTO escolas (nome, endereco)
	VALUES ('C.E. Ranchinho', 'Rua Miguel Couto – nº 13 – Jardim do Bosque');

INSERT INTO escolas (nome, endereco)
	VALUES ('Escola Municipal de Dança Iracema Nogueira', 'Avenida Vicente Jerônimo Freire – 22 – Vila Xavier');

INSERT INTO escolas (nome, endereco)
	VALUES ('Programa Integração AABB Comunidade', 'Av. Manoel de Abreu, 2735, Araraquara – SP (Associação Atlética Banco do Brasil)');

-- CERs

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Adelina Leite Amaral', 'Av. Santa Maria, 30 – Vila Vicentina');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Dr Álvaro Waldemar Colino', 'Rua Jorge Nicolau Lauand, 700 – Jardim das Estações');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Amélia Fávero Manini', 'Rua Atilio Bonetti, 720 – Jardim Água Branca');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Angelo Lorenzenti', 'Av. Carlos Bersanetti Filho “Ninin”, 150 – Jardim Altos de Pinheiros');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Antônio Custódio de Lima', 'Av. Manoel Fernandes Cadina, 854 – Jd. Victório de Santi');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Dr Antônio Tavares Pereira Lima', 'Av. Nossa Sra. Aparecida, 307 – Jardim Pinheiros');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Prof.ª Annunciata Lia David', 'Av. Remo Frontarolli, 254 – Jardim das Hortênsias');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Dona Carmelita Garcez I', 'R. Itália, 859 – São José');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Dona Carmelita Garcez II', 'R Expedicionários do Brasil, 556 – São José');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Concheta Smirne Mendonça', 'Av. São José, 1.870 –  Quitandinha');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. CER. Cyro Guedes Ramos', 'Rua Pedro Martini, 1.055 – Santa Angelina');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Dona Cotinha de Barros', 'Rua dos Estados, 1.061 – Jardim Brasil');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Eduardo Borges Coelho', 'Rua Dr. Aldo Cariani, 245 – Jardim Morumbi');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Eugênio Trovatti', 'Rua Bento Aranha do Amaral, 202 – Bueno de Andrada');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Dona Eloá do Valle Quadros', 'Rua D. Pedro I, 1.362 – Vila Xavier');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Eudóxia Pinto Ferraz', 'Rua Prof. Stanley Robson Cerqueira, 230 – Parque Residencial São Paulo');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Eunice Bonilha Toledo Piza', 'Rua Martiniano P. dos Santos, 121 – Jardim Brasília');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Honorina Comelli Lia', 'Av. Luiz Dosualdo, 170 – Jardim Imperador');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Jacomina Filippe Sambiase', 'Av. Romulo Lupo, 875 – Parque das Laranjeiras');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profº Dr José Alfredo Amaral Gurgel', 'Av. Nelson Fernandes, s/n – Adalberto Roxo');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. José do Amaral Vellosa', 'Rua Cândido Portinari, 861 – Jardim Paulistano');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. José Pizani', 'Rua Domingos Paulo Real, 347 – Yolanda Ópice');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Judith de Barros Batelli', 'Rua Prof. Carlos Alberto A. de Carvalho Pinto, 20 -Selmi-Dei / Setor III');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Leatrice Rodrigues Affonso', 'Rua João Belchior Marques Goulart, s/n – Parque Residencial Gramado II');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Leonor Mendes de Barros', 'Rua São Bento, 1.993 - Centro');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Maria Apparecida de Azevedo Bozutti', 'Av. José Rodrigues dos Santos, nº 160 - Jardim Indaiá');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER.  Maria Barcarolla Filié', 'Rua Capitão José Sabino Sampaio, 1.689 – Vila Melhado');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Maria da Glória Fonseca Simões', 'Av. Dorival Arlindo Falcone, 234 – Jardim Maria Luíza');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Maria Enaura Malavolta Magalhães', 'Av. Padre Miguel Pocce, 595 - Vale do Sol');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Maria José Pahin da Porciúncula', 'Rua Lourenço Rolfsen, 230 – Jardim Iguatemy');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Maria Pradelli Malara', 'Rua Dr. José de Freitas Madeira, 491-  Jardim Roberto Selmi-Dei /Setor I');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Maria Renata Lupo Bo', 'Av. José Antonio A. Filpi, 780 - CECAP');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Profª Marialice Lia Tedde', 'Rua Mário Barbugli, 985 – Jardim Cruzeiro do Sul');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Padre Bernardo Plate', 'Av. Francisco Sampaio Peixoto, 581 – Jardim Santa Lúcia');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Padre Mário Cavaretti Filho', 'Av. Antônio Angelo Zendrão, 45 – Altos de Pinheiros');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Rosa Bróglio Zanin', 'Av. Darcy dos Santos Bezerra, nº 185 – Jardim Ieda');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Dona Rosa Ribeiro Stringhetti', 'Rua Jurupema, 387 – Jardim América');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. do CAIC Rubens Cruz I', 'Av. Bercholina Alves Carvalho Conceição, 360 - : Selmi-Dei /Setor III');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. do CAIC Rubens Cruz II', 'Av. Bercholina Alves Carvalho Conceição, 360 – Selmi-Dei /Setor III');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. do CAIC Ricardo Caramuru de Castro Monteiro', 'Av. Carlos de Angeli, 200 – Jardim Nova Araraquara');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Zilda Martins Pierri', 'Av. Prof. Gustavo Fleury Charmilot, 101 – Jardim Paraiso');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Waldir Alceu Trigo', 'Fazenda bela Vista, s/n - Assentamento Bela Vista');

INSERT INTO escolas (nome, endereco)
	VALUES ('CER. Madre Irmã Maurina', 'Assentamento Monte Alegre VI – 9781-1222');

-- EMEFs

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Altamira A. Mantese', 'Av. Alziro Zarur, s/n – CEP. 14.806-344 (Selmi Dei III)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Eugênio Trovatti', 'Av. Bento Aranha do Amaral s/nº – CEP 14812-000 (Bueno de Andrade)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Gilda Rocha de Mello e Souza', 'Av. Clovis Van Dick, s/n – CEP.14.806-456 (Jardim Indaia)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Henrique Scabello', 'Av. Remo Frontarolli, 4.050 CEP. 14.808-518 (Hortências)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Hermínio Pagotto', 'Fazenda Bela Vista, s/n – CEP 14.801-970 (Assentamento Bela Vista)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. José Roberto de Pádua Camargo', 'Rua Nove de Julho, 4000 – CEP 14.802.300 (Jardim Dom Pedro I)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Luiz Roberto Salinas Fortes', 'Av. Prof. Gustavo Fleury Charmilot, s/n – CEP. 14.804-012 (Jardim Paraiso)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Maria de Lourdes S. Prado', 'Assentamento Monte Alegre VI – CEP. 14.812-000 (Assentamento Monte Alegre)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Olga Ferreira Campos', 'Av. Romulo Lupo, 775 CEP. 14.801-700 (Jardim Universal)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Rafael de Medina', 'Rua Adalgisa D. Michetti, 1.240 – CEP. 14.807-262 (Jardim Eliana)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Ricardo de C.C.Monteiro', 'Av. Carlos de Angeli, s/n – CEP 14.804-199 (Vale do Sol)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Rubens Cruz', 'Av. Dr. José Logatti, s/nº – CEP. 14.806-344 (Selmi Dei III)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Ruth Villaça Correia Leite Cardoso', 'Av. Dr Arlindo Falcone, 268 – CEP.14.805-263 (Jardim Maria Luiza)');

INSERT INTO escolas (nome, endereco)
	VALUES ('EMEF. Waldemar Saffiotti', 'Rua Mário Barbugli, 1.015 CEP. 14.808-378 (Jardim Cruzeiro do Sul)');