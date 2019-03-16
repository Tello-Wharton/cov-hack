package site.site.site;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
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


    private Gson gson;

    public ReactiveWebSocketHandler(){
        this.gson = new Gson();
    }


    @Override
    public Mono<Void> handle(WebSocketSession webSocketSession) {
        return webSocketSession.send(intervalFlux
                .map(String::valueOf)
                .map(signal -> new StateFragment())
                .map(stateFragment -> gson.toJson(stateFragment))
                .map(webSocketSession::textMessage))
                .and(webSocketSession.receive()
                        .map(WebSocketMessage::getPayloadAsText)
                        .log());
    }


}
