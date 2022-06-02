package structorECommerce.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import structorECommerce.dto.FirebaseAuthRequest;
import structorECommerce.dto.TokenResponse;
import structorECommerce.models.Client;
import structorECommerce.models.User;
import structorECommerce.repositories.ClientRepository;
import structorECommerce.repositories.UserRepository;
import structorECommerce.services.IFirebaseService;
import structorECommerce.services.JwtUserDetailsService;
import structorECommerce.utils.JwtTokenUtil;


@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    IFirebaseService firebaseService;

    @Autowired
    JwtTokenUtil jwtTokenUtil;

    @Autowired
    JwtUserDetailsService jwtUserDetailsService;

    @Autowired
    UserRepository userRepository;
    @Autowired
    ClientRepository clientRepository;

    @PostMapping("/register")
    void registraUsuarioFirebase(@RequestBody FirebaseAuthRequest firebaseAuthRequest) throws Exception{
        firebaseService.register(firebaseAuthRequest);
        String email = firebaseAuthRequest.getEmail();
        User user = new User();
        user.setEmail(email);
        Client client = new Client();
        client.setUser(userRepository.save(user));
        clientRepository.save(client);
    }

    @PostMapping("/login")
    TokenResponse logaUsuarioFirebase(@RequestBody FirebaseAuthRequest firebaseAuthRequest) throws Exception{
        firebaseService.login(firebaseAuthRequest);
        UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(firebaseAuthRequest.getEmail());
        String token = jwtTokenUtil.generateToken(userDetails);
        return new TokenResponse(token);
    }
}
