package structorECommerce.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import structorECommerce.dto.ProductResponse;
import structorECommerce.models.Product;
import structorECommerce.services.ProductService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping
    public void createProduct(@RequestBody Product product){
        productService.createProduct(product);
    }

    @GetMapping
    public List<ProductResponse> getProducts(){
        return productService.getProducts().stream().map(
                p -> ProductResponse.builder()
                        .productId(p.getProductId())
                        .productImage(p.getProductImage())
                        .description(p.getDescription())
                        .price(p.getPrice())
                        .build())
                .collect(Collectors.toList());
    }
}
