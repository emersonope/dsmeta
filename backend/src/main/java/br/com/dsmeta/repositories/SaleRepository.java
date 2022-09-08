package br.com.dsmeta.repositories;

import br.com.dsmeta.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
