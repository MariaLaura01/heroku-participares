package br.ifsp.arq.prs.participares.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifsp.arq.prs.participares.domain.model.Escola;
import br.ifsp.arq.prs.participares.repository.EscolaRepository;

@RestController
@RequestMapping("/escolas")
public class EscolaResource {
	@Autowired
	private EscolaRepository escolaRepository;
	
/*
	@Autowired
	private EscolaService escolaService;
*/
	@GetMapping
	public List<Escola> listar(){
		return escolaRepository.findAll();
	}
	
	
	// Definicao do comportamento da requisicao GET de escolas pelo codigo
    @GetMapping("/{codigo}")
    public ResponseEntity<Escola> buscarPeloCodigo(@PathVariable Long codigo){
        Optional<Escola> escola = escolaRepository.findById(codigo);
        if(escola.isPresent()) {
            return ResponseEntity.ok(escola.get());
        }
        return ResponseEntity.notFound().build();
    }
   
/*
	@PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Escola criar(@Valid @RequestBody Escola escola, HttpServletResponse response) {
        return escolaRepository.save(escola);
    }
    
    @DeleteMapping("/{codigo}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remover(@PathVariable Long codigo) {
		escolaRepository.deleteById(codigo);
	}

	@PutMapping("/{codigo}")
	public ResponseEntity<Escola> atualizar(@PathVariable Long codigo, @Valid @RequestBody Escola escola){
		Escola escolaSalvo = escolaService.atualizar(codigo, escola);
		return ResponseEntity.ok(escolaSalvo);
	}
*/
}
