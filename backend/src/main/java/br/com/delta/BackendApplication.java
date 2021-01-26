package br.com.delta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.gson.GsonBuilderCustomizer;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public GsonBuilderCustomizer configureGson() {
		return (gsonBuilder) -> {
			gsonBuilder
				.enableComplexMapKeySerialization()
				.setLenient()
				.setPrettyPrinting()
			;
		};
	}
}
