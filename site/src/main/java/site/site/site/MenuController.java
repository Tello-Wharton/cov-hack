package site.site.site;

import com.google.gson.Gson;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import site.site.site.api.dominos.DominosConnector;
import site.site.site.api.dominos.model.MenuSection;
import site.site.site.api.dominos.model.Store;
import site.site.site.api.dominos.model.StoreSearchResults;

import java.util.List;

@RestController
public class MenuController {

    private final DominosConnector dominosConnector;

    public MenuController(DominosConnector dominosConnector) {
        this.dominosConnector = dominosConnector;
    }

    @CrossOrigin
    @GetMapping("/menu/{postCode}")
    public List<MenuSection> getMenu(@PathVariable String postCode) {
        StoreSearchResults storeSearchResults = dominosConnector.storeSearch(postCode);
        Store localStore = storeSearchResults.localStore;
        List<MenuSection> menu = dominosConnector.getMenu(localStore);

        return menu;
    }

}
