package structorECommerce.dto;

import lombok.Builder;
import lombok.Data;
import structorECommerce.models.Product;


import java.util.List;

@Data
@Builder
public class CheckoutRequest {
    private List<Product> productList;
    private String clientId;
}

