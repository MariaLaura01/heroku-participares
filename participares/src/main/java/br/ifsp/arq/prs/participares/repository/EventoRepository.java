package br.ifsp.arq.prs.participares.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifsp.arq.prs.participares.domain.model.Evento;

public interface EventoRepository extends JpaRepository<Evento, Long>{

}
