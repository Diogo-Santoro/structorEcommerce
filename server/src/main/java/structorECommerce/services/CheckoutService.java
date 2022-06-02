package structorECommerce.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import structorECommerce.dto.CheckoutRequest;
import structorECommerce.models.Checkout;
import structorECommerce.models.Client;
import structorECommerce.repositories.CheckoutRepository;
import structorECommerce.repositories.ClientRepository;

import java.util.List;

@Service
public class CheckoutService {
    @Autowired
    CheckoutRepository checkoutRepository;

    @Autowired
    ClientRepository clientRepository;

    public void createCheckout(CheckoutRequest checkoutRequest){
        Checkout checkout = new Checkout();
        checkout.setProductList(checkoutRequest.getProductList());
        Client client = clientRepository.findById(checkoutRequest.getClientId()).orElseThrow();
        checkout.setClient(client);
        checkoutRepository.save(checkout);
    }

    public List<Checkout> getCheckoutList(){
        return checkoutRepository.findAll();
    }

}
