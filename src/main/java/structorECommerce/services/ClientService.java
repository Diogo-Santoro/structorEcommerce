package structorECommerce.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import structorECommerce.models.Client;
import structorECommerce.repositories.ClientRepository;

import java.util.List;


@Service
public class ClientService {

    @Autowired
    ClientRepository clientRepository;

    public void createClient(Client client){
        clientRepository.save(client);
    }

    public List<Client> getClients(){
        return clientRepository.findAll();
    }
}
