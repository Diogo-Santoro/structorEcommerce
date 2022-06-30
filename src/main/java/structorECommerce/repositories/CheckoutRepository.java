package structorECommerce.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import structorECommerce.models.Checkout;


@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, String> {

}
