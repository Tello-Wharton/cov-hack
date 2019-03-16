package site.site.site;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import site.site.site.model.state.StateVersion;
import site.site.site.model.users.User;

@RestController
public class LoginController {

    @PostMapping("/login")
    public void login(User user)
    {
        StateVersion.getStateVersion(state -> state.addUser(user));
    }
}
