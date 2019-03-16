package site.site.site.api.dominos.model;

import java.util.List;

public class StoreSearchResults {
    public Store localStore;
    public boolean localStoreCanDeliverToAddress;
    public boolean isPostCode;
    public List<Store> collectionStores;
}
