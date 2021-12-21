package br.ifsp.arq.prs.participares.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.ifsp.arq.prs.participares.domain.model.Escola;
import br.ifsp.arq.prs.participares.domain.model.Evento;
import br.ifsp.arq.prs.participares.repository.EventoRepository;
import br.ifsp.arq.prs.participares.service.EventoService;

@RestController
@RequestMapping("/eventos")
public class EventoResource {
	@Autowired
	private EventoRepository eventoRepository;
	
	@Autowired
	private EventoService eventoService;
	
	@GetMapping
//	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_EVENTO') and #oauth2.hasScope('read')")
	public List<Evento> listar(){
		return eventoRepository.findAll();
	}
	
	@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EVENTO') and #oauth2.hasScope('write')")
    public Evento criar(@Valid @RequestBody Evento evento, HttpServletResponse response) {
        return eventoRepository.save(evento);
    }
	
    @GetMapping("/{codigo}")
    @PreAuthorize("hasAuthority('ROLE_PESQUISAR_EVENTO') and #oauth2.hasScope('read')")
    public ResponseEntity<Evento> buscarPeloCodigo(@PathVariable Long codigo){
        Optional<Evento> evento = eventoRepository.findById(codigo);
        if(evento.isPresent()) {
            return ResponseEntity.ok(evento.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{codigo}")
    @PreAuthorize("hasAuthority('ROLE_REMOVER_EVENTO') and #oauth2.hasScope('write')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		eventoRepository.deleteById(codigo);
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EVENTO') and #oauth2.hasScope('write')")
	public ResponseEntity<Evento> atualizar(@PathVariable Long codigo, @Valid @RequestBody Evento evento){
		Evento eventoSalvo = eventoService.atualizar(codigo, evento);
		return ResponseEntity.ok(eventoSalvo);
	}
	
	@PutMapping("/{codigo}/escola")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EVENTO') and #oauth2.hasScope('write')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizarPropriedadeEscola(@PathVariable Long codigo, @RequestBody Escola escola){
		eventoService.atualizarPropriedadeEscola(codigo, escola);
	}
}
