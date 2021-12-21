package br.ifsp.arq.prs.participares.domain.model;

import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity // Pesistencia da classe
@Table(name = "usuarios") // Mapeamento p/ banco
public class Usuario {
	@Id
	@Size(min = 3, max = 30)
	private String login;
	
	@Size(min = 8, max = 500)
	private String senha;
	
	@Enumerated(EnumType.STRING)
	private Tipo tipo;
	
	@ManyToOne
	@JoinColumn(name = "codigo_da_escola")
	private Escola escola;
	
	@ManyToMany(fetch = FetchType.EAGER) // EAGER => ancioso; LAZY = preguiçoso
	@JoinTable(name = "usuario_permissao", 
		joinColumns = @JoinColumn(name = "login"),
		inverseJoinColumns = @JoinColumn(name = "codigo"))
	private List<Permissao> permissoes;
	
	public Usuario() {
		super();
	}

	public Usuario(String login, @Size(min = 3, max = 30) String senha,
			@NotNull Tipo tipo, Escola escola, List<Permissao> permissoes) {
		super();
		this.login = login;
		this.senha = senha;
		this.tipo = tipo;
		this.escola = escola;
		this.permissoes = permissoes;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		if (login == null) {
			if (other.login != null)
				return false;
		} else if (!login.equals(other.login))
			return false;
		return true;
	}

	@Override
	public int hashCode() {
		return Objects.hash(login);
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Tipo getTipo() {
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	public Escola getEscola() {
		return escola;
	}

	public void setEscola(Escola escola) {
		this.escola = escola;
	}
	
	public List<Permissao> getPermissoes() {
		return permissoes;
	}

	public void setPermissoes(List<Permissao> permissoes) {
		this.permissoes = permissoes;
	}
}
