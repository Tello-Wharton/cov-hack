package site.site.site;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import site.site.site.model.StateFragment;

import java.time.Duration;

@Component("ReactiveWebSocketHandler")
public class ReactiveWebSocketHandler implements WebSocketHandler {

    Flux<Long> intervalFlux = Flux.interval(Duration.ofSeconds(1));

    ObjectMapper mapperObj = new ObjectMapper();
    

    @Override
    public Mono<Void> handle(WebSocketSession webSocketSession) {
        return webSocketSession.send(intervalFlux
                .map(String::valueOf)
                .map(signal -> new StateFragment())
                .map(stateFragment -> {
                    try {
                        return mapperObj.writeValueAsString(stateFragment);
                    } catch (JsonProcessingException e) {
                        e.printStackTrace();
                        throw new RuntimeException();
                    }
                })
                .map(webSocketSession::textMessage))
                .and(webSocketSession.receive()
                        .map(WebSocketMessage::getPayloadAsText)
                        .log());
    }


}
