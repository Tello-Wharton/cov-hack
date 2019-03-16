package site.site.site.model.State;

import java.util.function.Consumer;
import java.util.function.Function;

public class StateVersion {

        private Long version;
        private State state;

        private StateVersion(){
                this.version = Version.getVersion();
                this.state = State.getInstance();
        }

        public static synchronized StateVersion getStateVersion(){
                return new StateVersion();
        }

        public static synchronized StateVersion getStateVersion(Consumer<State> transform){
                StateVersion stateVersion = new StateVersion();

                transform.accept(stateVersion.state);

                return stateVersion;
        }
}
