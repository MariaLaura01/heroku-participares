package br.ifsp.arq.prs.participares;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import br.ifsp.arq.prs.participares.config.property.ServicoApiProperty;

@SpringBootApplication
@EnableConfigurationProperties(ServicoApiProperty.class)
public class ParticiparesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParticiparesApplication.class, args);
	}

}
