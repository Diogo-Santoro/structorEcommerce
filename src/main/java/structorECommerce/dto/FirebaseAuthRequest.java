package structorECommerce.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FirebaseAuthRequest {
    private String email;
    private String password;
    private String name;
    private boolean returnSecureToken;
}
