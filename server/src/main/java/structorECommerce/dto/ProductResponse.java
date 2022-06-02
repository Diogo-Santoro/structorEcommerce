package structorECommerce.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ProductResponse {
    private String productId;
    private String description;
    private float price;
    private String productImage;
}