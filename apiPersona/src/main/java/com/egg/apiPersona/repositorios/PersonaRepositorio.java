/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.egg.apiPersona.repositorios;

import com.egg.apiPersona.entidades.Persona;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nahue
 */
@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, String> {
    
    Persona getByNumero(Integer numero);
    
    Optional<Persona> findByNumero(Integer numero);
    
    Optional<Integer> findFirstByOrderByNumeroDesc();
    Optional<Persona> getFirstByOrderByNumeroDesc();
}
