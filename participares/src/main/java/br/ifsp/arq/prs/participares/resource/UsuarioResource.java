package br.ifsp.arq.prs.participares.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import br.ifsp.arq.prs.participares.domain.model.Usuario;
import br.ifsp.arq.prs.participares.repository.UsuarioRepository;
import br.ifsp.arq.prs.participares.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public List<Usuario> listar(){
		return usuarioRepository.findAll();
	}
	
	@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario criar(@Valid @RequestBody Usuario usuario, HttpServletResponse response) {
        return usuarioRepository.save(usuario);
    }
	
    @GetMapping("/{login}")
    public ResponseEntity<Usuario> buscarPeloCodigo(@PathVariable String login){
        Optional<Usuario> usuario = usuarioRepository.findByLogin(login);
        if(usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    @DeleteMapping("/{login}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable String login) {
		usuarioRepository.deleteByLogin(login);
	}

	@PutMapping("/{login}")
	public ResponseEntity<Usuario> atualizar(@PathVariable String login, @Valid @RequestBody Usuario usuario){
		Usuario usuarioSalvo = usuarioService.atualizar(login, usuario);
		return ResponseEntity.ok(usuarioSalvo);
	}
	
	@PutMapping("/{login}/escola")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizarPropriedadeAtivo(@PathVariable String login, @RequestBody Escola escola){
		usuarioService.atualizarPropriedadeEscola(login, escola);
	}
}