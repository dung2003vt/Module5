package com.example.product.service;

import com.example.product.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> findAll();

    Optional<Product> findOne(Long id);

    void save(Product product);

    void delete(Long id);
}
