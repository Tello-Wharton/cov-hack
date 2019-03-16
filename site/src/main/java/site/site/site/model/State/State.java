package site.site.site.model.State;

import java.util.ArrayList;
import java.util.List;

public class State {

    private static State instance = null;

    static State getInstance(){
        if (instance == null) instance = new State();

        return instance;
    }


    private String cake;
    private List<String> names;


    private State() {
        this.cake = "CAKE!";
        this.names = new ArrayList<>();
    }

    public void setCake(String cake){
        this.cake = cake;
    }

    public void addName(String name){
        this.names.add(name);
    }
}
