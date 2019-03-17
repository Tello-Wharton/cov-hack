package site.site.site.model.state;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    private Map<String, BiConsumer<State, String>> updateFunctions;

    private Map<String, User> users;
    private Map<String, String> cake;


    private State() {
        this.users = new HashMap<>();
        this.updateFunctions = updateFunctions();
    }

    public void addUser(User user)
    {
        this.users.put(user.username, user);
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


}
