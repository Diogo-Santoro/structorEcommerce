package structorECommerce.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import structorECommerce.dto.FirebaseAuthRequest;
import structorECommerce.models.Client;
import structorECommerce.models.User;
import structorECommerce.repositories.ClientRepository;
import structorECommerce.repositories.UserRepository;
import structorECommerce.services.IFirebaseService;
import structorECommerce.services.JwtUserDetailsService;
import structorECommerce.utils.JwtTokenUtil;

@RestController
@RequestMapping("/clients")
public class ClientController {

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
    void registraClient(@RequestBody FirebaseAuthRequest firebaseAuthRequest) throws Exception{
        firebaseService.register(firebaseAuthRequest);
        String email = firebaseAuthRequest.getEmail();
        User user = new User();
        user.setEmail(email);
        Client client = new Client();
        client.setUser(userRepository.save(user));
        clientRepository.save(client);
    }

    @PostMapping("/login")
    String logaClient(@RequestBody FirebaseAuthRequest firebaseAuthRequest) throws Exception{
       return firebaseService.login(firebaseAuthRequest);

    }
}


