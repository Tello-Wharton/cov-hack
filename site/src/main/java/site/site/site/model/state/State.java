package site.site.site.model.state;

import site.site.site.model.users.User;

import java.util.*;

public class State {

    private static State instance = null;

    static State getInstance(){
        if (instance == null) instance = new State();

        return instance;
    }


    //ignore these two
    private String cake;
    private List<String> names;

    private Map<String, User> users;


    private State() {
        this.cake = "CAKE!";
        this.names = new ArrayList<>();
        this.users = new HashMap<>();
    }

    public void setCake(String cake){
        this.cake = cake;
    }

    public void addName(String name){
        this.names.add(name);
    }

    public void addUser(User user)
    {
        this.users.put(user.username, user);
    }
}
