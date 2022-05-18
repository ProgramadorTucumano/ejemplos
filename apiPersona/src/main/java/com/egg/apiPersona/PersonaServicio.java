/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.egg.apiPersona;

import com.egg.apiPersona.entidades.Persona;
import com.egg.apiPersona.repositorios.PersonaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;

/**
 *
 * @author nahue
 */
@Service
public class PersonaServicio {

    @Autowired
    private PersonaRepositorio personaRepositorio;

    public Persona save(Persona persona) throws Exception {
        Persona personaDB = personaRepositorio.getFirstByOrderByNumeroDesc().orElse(new Persona());
        System.out.println("persona.getId(): "+persona.getId());
        System.out.println("personaDB.getId(): "+personaDB.getId());
        if (!personaDB.getId().equals(persona.getId())) {
            persona.setNumero(personaDB.getNumero() == null ? 1 : personaDB.getNumero() + 1);
        }

        if (persona.getNombre() == null || persona.getNombre().isEmpty()) {
            throw new Exception("El nombre no puede estar vacío");
        }

        if (persona.getApellido() == null || persona.getApellido().isEmpty()) {
            throw new Exception("El apellido no puede estar vacío");
        }
        return personaRepositorio.save(persona);
    }

    public Persona save(Persona persona, BindingResult bindingResult) throws MethodArgumentNotValidException {
        Persona personaDB = personaRepositorio.getFirstByOrderByNumeroDesc().orElse(new Persona());
        
        System.out.println("persona.getId(): "+persona.getId());
        System.out.println("personaDB.getId(): "+personaDB.getId());
        if (!personaDB.getId().equals(persona.getId())) {
            persona.setNumero(personaDB.getNumero() == null ? 1 : personaDB.getNumero() + 1);
        }

        if (persona.getNombre() == null || persona.getNombre().isEmpty()) {
            bindingResult.rejectValue("nombre", "El nombre no puede estar vacío");
        }

        if (persona.getApellido() == null || persona.getApellido().isEmpty()) {
            bindingResult.rejectValue("apellido", "El apellido no puede estar vacío");
        }

        if (persona.getEdad() == null) {
            bindingResult.rejectValue("edad", "La edad no puede estar vacía");
        }

        if (bindingResult.hasErrors()) {
            throw new MethodArgumentNotValidException(null, bindingResult);
        }
        return personaRepositorio.save(persona);
    }

    public Persona save3(Persona persona) {
        Persona personaDB = personaRepositorio.getFirstByOrderByNumeroDesc().orElse(new Persona());
        if (!personaDB.equals(persona)) {
            persona.setNumero(personaDB.getNumero() == null ? 1 : personaDB.getNumero() + 1);
        }
        return personaRepositorio.save(persona);
    }

    public Page<Persona> getAll(Pageable pageable) {
        return personaRepositorio.findAll(pageable);
    }

    public Persona getPersona(String numero) {
        return personaRepositorio.getByNumero(Integer.valueOf(numero));
    }

    public Persona findPersona(String numero) {
        return personaRepositorio.findByNumero(Integer.valueOf(numero)).orElse(null);
    }
}
