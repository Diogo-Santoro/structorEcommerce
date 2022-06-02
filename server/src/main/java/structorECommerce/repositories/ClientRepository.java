package structorECommerce.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import structorECommerce.models.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, String> {
    
}
