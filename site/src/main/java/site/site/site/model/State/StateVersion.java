package site.site.site.model.State;

public class StateVersion {

        private Long version;
        private State state;

        public StateVersion(){
                this.version = Version.getVersion();
                this.state = State.getInstance();
        }
}
