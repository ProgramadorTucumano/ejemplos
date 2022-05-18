/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.egg.apiPersona.entidades;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

/**
 *
 * @author nahue
 */
@Entity
@Data
public class Persona implements Serializable {
    
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name="uuid",strategy = "uuid2")
    private String id;
    @Column(unique = true)
    private Integer numero;
    
    @NotBlank(message = "anotacion El nombre no puede estar vacio")
    private String nombre;
    @NotBlank(message = "anotacion El apellido no puede estar vacio")
    private String apellido;
    @NotNull(message = "anotacion La edad no puede ser nula")
    private Integer edad;
}
