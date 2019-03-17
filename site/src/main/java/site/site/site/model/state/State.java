package site.site.site.model.state;

import site.site.site.model.users.User;

import java.util.*;

public class State {

    private static State instance = null;

    static State getInstance(){
        if (instance == null) instance = new State();

        return instance;
    }


    private Map<String, User> users;


    private State() {
        this.users = new HashMap<>();
    }

    public void addUser(User user)
    {
        this.users.put(user.username, user);
    }
}
