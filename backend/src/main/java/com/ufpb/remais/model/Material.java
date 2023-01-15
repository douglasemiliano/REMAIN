package com.ufpb.remais.model;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="materials")
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @Column(length = 10000)
    private String description;
    @ManyToOne
    private Image image;
    private String externalLinks;
    private String attatchments;
    private String survey;
    private Date createdAt;
    private Date updatedAt;
    @ManyToOne
    private User author;
    @ManyToMany
    private List <Category> category;
    private Integer views = 0;
    private boolean approved;

    public Material() {
    }

    public Material(long id, String title, String description, Image image, String externalLinks, String attatchments, String survey, Date createdAt, Date updatedAt, User author, List<Category> category, Integer views) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.externalLinks = externalLinks;
        this.attatchments = attatchments;
        this.survey = survey;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.author = author;
        this.category = category;
        this.views = views;
        this.approved = false;
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

    public String getSurvey() { return survey; }

    public void setSurvey(String survey) { this.survey = survey; }

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

    public List<Category> getCategory() {
        return this.category;
    }

    public void setCategory(List<Category> category) {
        this.category = category;
    }

    public Integer getViews() { return views; }

    public void setViews(Integer views) { this.views = views; }

    public boolean isApproved() { return approved; }

    public void setApproved(boolean approved) { this.approved = approved; }
}
