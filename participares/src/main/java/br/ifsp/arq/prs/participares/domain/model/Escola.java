package br.ifsp.arq.prs.participares.domain.model;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "escolas")
public class Escola {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@Size(min = 15, max = 100)
	private String nome;
	
	@Size(min = 5, max = 300)
	private String endereco;
	
	public Escola() {
		super();
	}

	public Escola(Long codigo, String nome, String endereco) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.endereco = endereco;
	}

	@Override
	public int hashCode() {
		return Objects.hash(codigo, endereco, nome);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Escola other = (Escola) obj;
		return Objects.equals(codigo, other.codigo);
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	
	
}
