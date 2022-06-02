package structorECommerce.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import structorECommerce.models.Product;


@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    
}
