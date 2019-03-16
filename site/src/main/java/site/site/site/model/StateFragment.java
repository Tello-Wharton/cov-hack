package site.site.site.model;

//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;

//@Entity
public class StateFragment {

//        @Id
//        @GeneratedValue(strategy= GenerationType.AUTO)

        private Long version;

        public StateFragment(){
                this.version = VersionMaster.getVersion();
        }

}
