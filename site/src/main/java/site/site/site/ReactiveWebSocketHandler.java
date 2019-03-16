package site.site.site;

import com.google.gson.Gson;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import site.site.site.model.state.StateVersion;

import java.time.Duration;

@Component
public class ReactiveWebSocketHandler implements WebSocketHandler {

    private Flux<Long> intervalFlux;
    private Gson gson;

    public ReactiveWebSocketHandler(){
        this.intervalFlux = Flux.interval(Duration.ofSeconds(1));
        this.gson = new Gson();
    }


    @Override
    public Mono<Void> handle(WebSocketSession webSocketSession) {

        return webSocketSession.send(intervalFlux
                .map(String::valueOf)
                .map(signal -> StateVersion.getStateVersion(state -> state.addName("CALL")))
                .map(stateVersion -> gson.toJson(stateVersion))
                .map(webSocketSession::textMessage));
    }


}
