package site.site.site;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Mono;
import site.site.site.model.state.StateVersion;

@Component
public class StateUpdaterSocketHandler implements WebSocketHandler {

    @Override
    public Mono<Void> handle(WebSocketSession webSocketSession) {

        return webSocketSession
                .receive()
                .map(WebSocketMessage::getPayloadAsText)
                .map(str ->  StateVersion.getStateVersion(state -> state.update(str))).then();
    }
}