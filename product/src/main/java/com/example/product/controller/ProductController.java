package com.example.product.controller;

import com.example.product.model.Product;
import com.example.product.service.impl.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductController {
    @Autowired
    private ProductService productService;
    @GetMapping
    private ResponseEntity<List<Product>> findAll(){
        return new ResponseEntity<>(productService.findAll(), HttpStatus.ACCEPTED);
    }
    @GetMapping("/{id}")
    private ResponseEntity<Product> findOne(@PathVariable Long id){
        Optional<Product> productOptional = productService.findOne(id);
        if (productOptional.isPresent()){
            return new ResponseEntity<>(productOptional.get(),HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping
    private ResponseEntity<?> create(@RequestBody Product product){
        productService.save(product);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    @PutMapping("/{id}")
    private ResponseEntity<?> update(@PathVariable Long id,@RequestBody Product product){
        Optional<Product> productOptional = productService.findOne(id);
        if (productOptional.isPresent()){
            product.setId(id);
            productService.save(product);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    private ResponseEntity<?> delete(@PathVariable Long id){
        Optional<Product> productOptional = productService.findOne(id);
        if (productOptional.isPresent()){
            productService.delete(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
