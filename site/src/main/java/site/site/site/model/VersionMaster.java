package site.site.site.model;

public class VersionMaster {

    private static VersionMaster instance = null;

    public static synchronized long getVersion(){
        if (instance == null) instance = new VersionMaster();

        return instance.nextVersion();
    }

    private long version;

    private VersionMaster(){
        this.version = -1L;
    }

    private long nextVersion(){
        this.version += 1;
        return version;
    }
}
