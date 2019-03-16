package site.site.site;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import site.site.site.model.state.StateVersion;
import site.site.site.model.users.User;

@RestController
public class LoginController {

    @PostMapping("/login")
    public User login(@RequestBody User user)
    {
        StateVersion.getStateVersion(state -> state.addUser(user));

        return user;
    }
}
