package structorECommerce.services;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import structorECommerce.dto.FirebaseAuthRequest;
import structorECommerce.dto.FirebaseAuthResponse;

@Service
public class FirebaseService  implements IFirebaseService{

    private String loginUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAj-EYoAKW_gyu3RKF-h1nAbBgze44yYVE" ;

    private String registerUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAj-EYoAKW_gyu3RKF-h1nAbBgze44yYVE";


    public void register(FirebaseAuthRequest firebaseAuthRequest) throws Exception{
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<FirebaseAuthRequest> httpEntity = new HttpEntity<>(firebaseAuthRequest);
        System.out.println(registerUrl);
        ResponseEntity<FirebaseAuthResponse> response =
                restTemplate.exchange(registerUrl, HttpMethod.POST, httpEntity, FirebaseAuthResponse.class);

        if(response.getStatusCodeValue() != 200){
            throw new Exception("Não pode registrar!");
        }
        System.out.println(response.getBody());
    }

    public String login(FirebaseAuthRequest firebaseAuthRequest) throws Exception{
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<FirebaseAuthRequest> httpEntity = new HttpEntity<>(firebaseAuthRequest);
        ResponseEntity<FirebaseAuthResponse> response =
                restTemplate.exchange(loginUrl, HttpMethod.POST, httpEntity, FirebaseAuthResponse.class);

        if(response.getStatusCodeValue() != 200){
            throw new Exception("Não pode logar!");
        }
        return response.getBody().getIdToken();

    }
}
