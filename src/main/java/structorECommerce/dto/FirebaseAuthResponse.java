package structorECommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FirebaseAuthResponse {
    private String idToken;
    private String email;
    private String name;
    private String refreshToken;
    private String expiresIn;
    private String localId;
    private boolean registered;
}