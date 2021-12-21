package br.ifsp.arq.prs.participares.service;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.ifsp.arq.prs.participares.domain.model.Escola;
import br.ifsp.arq.prs.participares.domain.model.Usuario;
import br.ifsp.arq.prs.participares.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Usuario atualizar(String login, @Valid Usuario usuario) {
		Usuario usuarioSalvo = usuarioRepository.findById(login)
				.orElseThrow(()->new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(usuario, usuarioSalvo, "codigo");
		return usuarioRepository.save(usuarioSalvo);
	}
	
	public void atualizarPropriedadeEscola(String login, Escola escola) {
		Usuario usuarioSalvo = buscarUsuarioViaLogin(login);
		usuarioSalvo.setEscola(escola);
		usuarioRepository.save(usuarioSalvo);
	}
	
	private Usuario buscarUsuarioViaLogin(String login) {
		Usuario usuarioSalvo = usuarioRepository.findById(login)
				.orElseThrow(()-> new EmptyResultDataAccessException(1));
		return usuarioSalvo;
	}
}
