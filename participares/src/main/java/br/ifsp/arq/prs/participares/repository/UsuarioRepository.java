package br.ifsp.arq.prs.participares.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifsp.arq.prs.participares.domain.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>{
	
	public Optional<Usuario> deleteByLogin(String login);

	public Optional<Usuario> findByLogin(String login);

}