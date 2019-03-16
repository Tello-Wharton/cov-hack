package site.site.site.api.dominos;

import com.google.gson.Gson;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;
import site.site.site.api.dominos.model.StoreSearchResults;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class DominosConnector {
    private final HttpClient httpClient;
    private final String scheme = "https";
    private final String host = "www.dominos.co.uk";
    private final Gson gson;

    public DominosConnector() {
        this.gson = new Gson();
        this.httpClient = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .build();
    }

    /**
     * For good results, use a postcode
     */
    public StoreSearchResults storeSearch(String searchTerm) {
        URI uri = UriComponentsBuilder.newInstance()
                .scheme(scheme)
                .host(host)
                .path("/storefindermap/storesearch")
                .queryParam("SearchText", searchTerm)
                .build()
                .toUri();

        HttpRequest request = HttpRequest.newBuilder()
                .uri(uri)
                .GET()
                .build();

        HttpResponse<String> response;
        try {
            response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

        return gson.fromJson(response.body(), StoreSearchResults.class);
    }
}
