package site.site.site;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import org.springframework.web.reactive.socket.client.ReactorNettyWebSocketClient;
import org.springframework.web.reactive.socket.client.WebSocketClient;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.net.URI;
import java.time.Duration;
import java.util.HashMap;

@SpringBootApplication
public class SiteApplication{

	public static void main(String[] args) {
		SpringApplication.run(SiteApplication.class, args);

		WebSocketClient client = new ReactorNettyWebSocketClient();
		client.execute(
				URI.create("ws://localhost:8080/event-emitter"),
				session -> session.send(
						Mono.just(session.textMessage("event-spring-reactive-client-websocket")))
						.thenMany(session.receive()
								.map(WebSocketMessage::getPayloadAsText)
								.log())
						.then())
				.block(Duration.ofSeconds(10L));
	}

}
