package structorECommerce.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CheckoutResponse {
    private String checkoutId;
    private String clientName;
}