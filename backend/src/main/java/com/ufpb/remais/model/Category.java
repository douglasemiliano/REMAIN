package com.ufpb.remais.model;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToOne
    private Image image;

    public Category(Long id, String description,Image image) {
        this.id = id;
        this.name = description;
        this.image = image;
    }

    public Category() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String description) {
        this.name = description;
    }

    public Image getImage() { return image;
    }
    public void setImage(Image image) { this.image = image;
    }
}
