package site.site.site.model.State;

class State {

    private static State instance = null;

    static State getInstance(){
        if (instance == null) instance = new State();

        return instance;
    }


    private String cake;
    private State() {
        this.cake = "CAKE!";
    }
}
