package br.ifsp.arq.prs.participares.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "eventos")
public class Evento {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	
	@ManyToOne
	@JoinColumn(name = "codigo_da_escola")
	private Escola escola;

	@Size(min = 1, max = 100)
	private String nome;
	
	@Size(min = 3, max = 500)
	private String descricao;
	
	@NotNull
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate data;
	
	@Size(min = 2, max = 100)
	private String local;
	
	public Evento() {
		super();
	}

	public Evento(Long codigo, Escola escola, @Size(min = 1, max = 100) String nome,
			@Size(min = 3, max = 500) String descricao, @NotNull LocalDate data,
			@Size(min = 2, max = 100) String local) {
		super();
		this.codigo = codigo;
		this.escola = escola;
		this.nome = nome;
		this.descricao = descricao;
		this.data = data;
		this.local = local;
	}

	@Override
	public int hashCode() {
		return Objects.hash(codigo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Evento other = (Evento) obj;
		return Objects.equals(codigo, other.codigo);
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public Escola getEscola() {
		return escola;
	}

	public void setEscola(Escola escola) {
		this.escola = escola;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}
	
	
}
