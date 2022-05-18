/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.egg.apiPersona.restcontrollers;

import com.egg.apiPersona.PersonaServicio;
import com.egg.apiPersona.entidades.Persona;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 *
 * @author nahue
 */
@CrossOrigin()
@RestController
public class PersonaRestController {

    @Autowired
    private PersonaServicio personaServicio;

    @GetMapping("/persona")
    public Page<Persona> getAll(@PageableDefault(page = 0, size = 10) Pageable pageable) {
        return personaServicio.getAll(pageable);
    }

    @GetMapping("/persona/{numeroPersona}")
    public Persona getAll(@PageableDefault(page = 0, size = 10) Pageable pageable,
            @PathVariable("numeroPersona") String numeroPersona) {
        return personaServicio.getPersona(numeroPersona);
    }
    
    @PostMapping("/persona")
    public Persona save(@RequestBody Persona persona) {

        try {
            return personaServicio.save(persona);
        } catch (Exception ex) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST, ex.getMessage());
        }
    }

    @PostMapping("/persona2")
    public Persona save(@RequestBody Persona persona, BindingResult bindingResult) throws MethodArgumentNotValidException {
            return personaServicio.save(persona, bindingResult);
    }

    @PostMapping("/persona3")
    public Persona save3(@Valid @RequestBody Persona persona) {
            return personaServicio.save3(persona);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage() != null ? error.getDefaultMessage() : error.getCode();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }

}
