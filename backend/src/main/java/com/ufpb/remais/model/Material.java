package com.ufpb.remais.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @Column(length = 2000)
    private String description;
    @ManyToOne
    private Image image;
    private String externalLinks;
    private String attatchments;
    private Date createdAt;
    private Date updatedAt;
    @ManyToOne
    private User author;
    private Category category;

    public Material() {
    }

    public Material(long id, String title, String description, Image image, String externalLinks, String attatchments, Date createdAt, Date updatedAt, User author, Category category) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.externalLinks = externalLinks;
        this.attatchments = attatchments;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.author = author;
        this.category = category;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }

    public String getExternalLinks() {
        return externalLinks;
    }

    public void setExternalLinks(String externalLinks) {
        this.externalLinks = externalLinks;
    }

    public String getAttatchments() {
        return attatchments;
    }

    public void setAttatchments(String attatchments) {
        this.attatchments = attatchments;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public String getCategory() {
        return category.getDescription();
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
