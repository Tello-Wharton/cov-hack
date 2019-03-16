package site.site.site.api.dominos;

import org.springframework.stereotype.Service;
import site.site.site.api.dominos.model.StoreSearchResults;

import java.net.http.HttpClient;

@Service
public class DominosConnector
{
    private String endpoint = "https://www.dominos.co.uk";

    public DominosConnector() {

    }

    /**
     * For good results, use a postcode
     */
    public StoreSearchResults storeSearch(String searchTerm) {
        return null;
    }
}
