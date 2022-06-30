package structorECommerce.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import structorECommerce.dto.CheckoutRequest;
import structorECommerce.dto.CheckoutResponse;
import structorECommerce.services.CheckoutService;


import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/checkouts")
public class CheckoutController {

    @Autowired
    CheckoutService checkoutService;

    @PostMapping
    public void createProduct(@RequestBody CheckoutRequest checkoutRequest){

        checkoutService.createCheckout(checkoutRequest);
    }

    @GetMapping
    public List<CheckoutResponse> getCheckout(){
        return checkoutService.getCheckoutList().stream()
                .map(c -> CheckoutResponse.builder()
                        .checkoutId(c.getId())
                        .clientName(c.getClient().getUser().getName())
                        .build()
                ).collect(Collectors.toList());

    }




}
