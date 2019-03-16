package site.site.site;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import site.site.site.api.dominos.DominosConnector;
import site.site.site.api.dominos.model.StoreSearchResults;

@Controller
public class TestController {
    private final DominosConnector dominosConnector;

    public TestController(DominosConnector dominosConnector) {
        this.dominosConnector = dominosConnector;
    }

    @GetMapping("/test")
    public String test() {
        StoreSearchResults storeSearchResults = dominosConnector.storeSearch("b64 6bd");

        return "";
    }
}
