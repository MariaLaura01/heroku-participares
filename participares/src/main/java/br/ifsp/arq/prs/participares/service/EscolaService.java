package br.ifsp.arq.prs.participares.service;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.ifsp.arq.prs.participares.domain.model.Escola;
import br.ifsp.arq.prs.participares.repository.EscolaRepository;

@Service
public class EscolaService {
	@Autowired
	private EscolaRepository escolaRepository;
	
	public Escola atualizar(Long codigo, @Valid Escola escola) {
		Escola escolaSalvo = escolaRepository.findById(codigo)
				.orElseThrow(()->new EmptyResultDataAccessException(1));
		BeanUtils.copyProperties(escola, escolaSalvo, "codigo");
		return escolaRepository.save(escolaSalvo);
	}
	
}
