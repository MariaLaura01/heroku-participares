package br.ifsp.arq.prs.participares.service;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.ifsp.arq.prs.participares.domain.model.Evento;
import br.ifsp.arq.prs.participares.domain.model.Imagem;
import br.ifsp.arq.prs.participares.repository.EventoRepository;
import br.ifsp.arq.prs.participares.repository.ImagemRepository;
import br.ifsp.arq.prs.participares.service.exception.EventoInexistenteException;

@Service
public class ImagemService {
	@Autowired
	private ImagemRepository imagemRepository;
	
	@Autowired
	private EventoRepository eventoRepository;
	
	public Imagem atualizar(Long codigo, @Valid Imagem Imagem) {
		Imagem ImagemSalvo = imagemRepository.findById(codigo)
				.orElseThrow(()->new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(Imagem, ImagemSalvo, "codigo");
		return imagemRepository.save(ImagemSalvo);
	}
	
	public void atualizarPropriedadeEvento(Long codigo, Evento evento) {
		Imagem ImagemSalvo = buscarImagemPeloCodigo(codigo);
		ImagemSalvo.setEvento(evento);
		imagemRepository.save(ImagemSalvo);
	}
	
	private Imagem buscarImagemPeloCodigo(Long codigo) {
		Imagem ImagemSalvo = imagemRepository.findById(codigo)
				.orElseThrow(()-> new EmptyResultDataAccessException(1));
		return ImagemSalvo;
	}
	
	public Imagem salvar(Imagem imagem) {
		Optional<Evento> evento = eventoRepository.findById(imagem.getEvento().getCodigo());
		if(!evento.isPresent()) {
			throw new EventoInexistenteException();
		}
		return imagemRepository.save(imagem);
	}
}
