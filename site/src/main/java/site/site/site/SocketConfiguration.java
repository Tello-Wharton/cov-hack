package site.site.site;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.HandlerMapping;
import org.springframework.web.reactive.handler.SimpleUrlHandlerMapping;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.server.support.WebSocketHandlerAdapter;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class SocketConfiguration {

    private StateEmitterSocketHandler stateEmitterSocketHandler;
    private StateUpdaterSocketHandler stateUpdaterSocketHandler;

    public SocketConfiguration(StateEmitterSocketHandler stateEmitterSocketHandler, StateUpdaterSocketHandler stateUpdaterSocketHandler){
        this.stateEmitterSocketHandler = stateEmitterSocketHandler;
        this.stateUpdaterSocketHandler = stateUpdaterSocketHandler;
    }

    @Bean
    public HandlerMapping webSocketHandlerMapping() {
        Map<String, WebSocketHandler> map = new HashMap<>();
        map.put("/state-emitter", stateEmitterSocketHandler);
        map.put("/state-updater", stateUpdaterSocketHandler);

        SimpleUrlHandlerMapping handlerMapping = new SimpleUrlHandlerMapping();
        handlerMapping.setOrder(20);
        handlerMapping.setUrlMap(map);

        return handlerMapping;
    }

    @Bean
    public WebSocketHandlerAdapter handlerAdapter() {
        return new WebSocketHandlerAdapter();
    }
}