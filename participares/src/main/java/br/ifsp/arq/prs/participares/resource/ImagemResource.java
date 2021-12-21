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

import br.ifsp.arq.prs.participares.domain.model.Evento;
import br.ifsp.arq.prs.participares.domain.model.Imagem;
import br.ifsp.arq.prs.participares.repository.ImagemRepository;
import br.ifsp.arq.prs.participares.service.ImagemService;

@RestController
@RequestMapping("/imagens")
public class ImagemResource {
	@Autowired
	private ImagemRepository imagemRepository;
	
	@Autowired
	private ImagemService imagemService;
	
	@GetMapping
//	@PreAuthorize("hasAuthority('ROLE_PESQUISAR_EVENTO') and #oauth2.hasScope('read')")
	public List<Imagem> listar(){
		return imagemRepository.findAll();
	}
	
	@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EVENTO') and #oauth2.hasScope('write')")
    public Imagem criar(@Valid @RequestBody Imagem imagem, HttpServletResponse response) {
        return imagemRepository.save(imagem);
    }
	
    @GetMapping("/{codigo}")
    @PreAuthorize("hasAuthority('ROLE_PESQUISAR_EVENTO') and #oauth2.hasScope('read')")
    public ResponseEntity<Imagem> buscarPeloCodigo(@PathVariable Long codigo){
        Optional<Imagem> imagem = imagemRepository.findById(codigo);
        if(imagem.isPresent()) {
            return ResponseEntity.ok(imagem.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{codigo}")
    @PreAuthorize("hasAuthority('ROLE_REMOVER_EVENTO') and #oauth2.hasScope('write')")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		imagemRepository.deleteById(codigo);
	}

	@PutMapping("/{codigo}")
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EVENTO') and #oauth2.hasScope('write')")
	public ResponseEntity<Imagem> atualizar(@PathVariable Long codigo, @Valid @RequestBody Imagem imagem){
		Imagem imagemSalvo = imagemService.atualizar(codigo, imagem);
		return ResponseEntity.ok(imagemSalvo);
	}
	
	@PutMapping("/{codigo}/evento")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@PreAuthorize("hasAuthority('ROLE_CADASTRAR_EVENTO') and #oauth2.hasScope('write')")
	public void atualizarPropriedadeEvento(@PathVariable Long codigo, @RequestBody Evento evento){
		imagemService.atualizarPropriedadeEvento(codigo, evento);
	}
}
