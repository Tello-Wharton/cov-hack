package site.site.site.model.state;

class Version {

    private static Version instance = null;

    static synchronized long getVersion(){
        if (instance == null) instance = new Version();

        return instance.nextVersion();
    }

    private long version;

    private Version(){
        this.version = -1L;
    }

    private long nextVersion(){
        this.version += 1;
        return version;
    }
}
