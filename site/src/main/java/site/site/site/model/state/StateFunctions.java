package site.site.site.model.state;

import java.util.Map;
import java.util.function.Consumer;

public class StateFunctions {

    private Map<String, Consumer<State>> functions;

    public StateFunctions(){
        functions = Map.of();
    }

    public Consumer<State> function(String functionName){
        return functions.get(functionName);
    }
}
