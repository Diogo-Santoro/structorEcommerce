package structorECommerce.services;



import structorECommerce.dto.FirebaseAuthRequest;

public interface IFirebaseService {
    void register(FirebaseAuthRequest firebaseAuthRequest) throws Exception;
    String login(FirebaseAuthRequest firebaseAuthRequest) throws Exception;
}
