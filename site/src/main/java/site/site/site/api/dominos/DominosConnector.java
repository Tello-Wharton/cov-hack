package site.site.site.api.dominos;

import org.springframework.stereotype.Service;
import site.site.site.api.dominos.model.StoreSearchResults;

import java.net.http.HttpClient;

@Service
public class Connector {
    private String endpoint = "https://www.dominos.co.uk";

    public Connector() {
        this.httpClient = HttpClient.newBuilder()
                .version()
                .build();
    }

    /**
     * For good results, use a postcode
     */
    public StoreSearchResults storeSearch(String searchTerm) {

    }
}
