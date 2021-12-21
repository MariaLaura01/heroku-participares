package br.ifsp.arq.prs.participares.service;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.ifsp.arq.prs.participares.domain.model.Escola;
import br.ifsp.arq.prs.participares.domain.model.Evento;
import br.ifsp.arq.prs.participares.repository.EscolaRepository;
import br.ifsp.arq.prs.participares.repository.EventoRepository;
import br.ifsp.arq.prs.participares.service.exception.EscolaInexistenteException;

@Service
public class EventoService {
	@Autowired
	private EventoRepository eventoRepository;
	
	@Autowired
	private EscolaRepository escolaRepository;
	
	public Evento atualizar(Long codigo, @Valid Evento evento) {
		Evento eventoSalvo = eventoRepository.findById(codigo)
				.orElseThrow(()->new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(evento, eventoSalvo, "codigo");
		return eventoRepository.save(eventoSalvo);
	}
	
	public void atualizarPropriedadeEscola(Long codigo, Escola escola) {
		Evento eventoSalvo = buscarEventoPeloCodigo(codigo);
		eventoSalvo.setEscola(escola);
		eventoRepository.save(eventoSalvo);
	}
	
	private Evento buscarEventoPeloCodigo(Long codigo) {
		Evento eventoSalvo = eventoRepository.findById(codigo)
				.orElseThrow(()-> new EmptyResultDataAccessException(1));
		return eventoSalvo;
	}
	
	public Evento salvar(Evento evento) {
		Optional<Escola> escola = escolaRepository.findById(evento.getEscola().getCodigo());
		if(!escola.isPresent()) {
			throw new EscolaInexistenteException();
		}
		return eventoRepository.save(evento);
	}
}
