package site.site.site.model.state;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.gson.Gson;
import site.site.site.model.users.User;

import java.util.*;
import java.util.function.BiConsumer;

public class State {

    private static State instance = null;

    static State getInstance(){
        if (instance == null) instance = new State();

        return instance;
    }

    @JsonIgnore
    private transient final Gson gson;

    @JsonIgnore
    private Map<String, BiConsumer<State, String>> updateFunctions;

    private Map<String, User> users;
    private Map<String, String> cake;


    private State() {
        this.gson = new Gson();
        this.updateFunctions = updateFunctions();

        this.users = new HashMap<>();
    }

    public void addUser(User user)
    {
        users.put(user.username, user);
    }

    public void update(String functionJsonString){

        var functionJson = gson.fromJson(functionJsonString, FunctionJson.class);
        updateFunctions.get(functionJson.functionName).accept(this, functionJson.functionArgs);
    }

    public void addTest(String string){
        cake.put(string, string);
    }

    private static HashMap<String, BiConsumer<State, String>> updateFunctions(){

        var updateFunctions = new HashMap<String, BiConsumer<State, String>>();

        BiConsumer<State, String> test = (state, string) -> state.addTest(string);

        updateFunctions.put("test", test);

        return updateFunctions;
    }

    private class FunctionJson{
        public String functionName;
        public String functionArgs;
    }

}
