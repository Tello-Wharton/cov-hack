package site.site.site.model.state;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.gson.Gson;
import site.site.site.model.PizzaOrder;
import site.site.site.model.users.User;

import java.util.*;
import java.util.function.BiConsumer;
import java.util.logging.Level;
import java.util.logging.Logger;

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
    private List<PizzaOrder> pizzas;

    private Map<String, String> cake;


    private State() {
        this.gson = new Gson();
        this.updateFunctions = updateFunctions();

        this.users = new HashMap<>();
        this.pizzas = new ArrayList<>();

        this.cake = new HashMap<>();
    }

    public void addUser(User user)
    {
        users.put(user.username, user);
    }

    public void update(String functionJsonString){

        Logger.getLogger("oof").log(Level.WARNING, functionJsonString);
        var functionJson = gson.fromJson(functionJsonString, FunctionJson.class);
        Logger.getLogger("oof").log(Level.WARNING, functionJson.functionName);
        updateFunctions.get(functionJson.functionName).accept(this, functionJson.functionArgs);
    }

    private void addTest(String string){
        cake.put(string, string);
    }

    private void addPizza(String pizzaOrder){
        var pizza = gson.fromJson(pizzaOrder, PizzaOrder.class);
        pizzas.add(pizza);
    }

    private static HashMap<String, BiConsumer<State, String>> updateFunctions(){

        var updateFunctions = new HashMap<String, BiConsumer<State, String>>();

        BiConsumer<State, String> test = State::addTest;
        BiConsumer<State, String> addPizza = State::addPizza;

        updateFunctions.put("test", test);
        updateFunctions.put("addPizza", addPizza);

        return updateFunctions;
    }

    private class FunctionJson{
        String functionName;
        String functionArgs;
    }

}
