package com.ufpb.remais.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;


@Entity
@Table (name="users")
public class User implements Serializable {

	private static final long serialVersionUID = -889516755900141971L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String uid;
	private String firstName;
	private String lastName;
	private String email;
	private boolean isEmailVerified;
	private String birthDate;
	private String photoUrl;
	private Date createdAt;
	private Date updatedAt;
	@ManyToMany
	private List<Role> roles = new ArrayList<Role>();


	public User() {
	}

	public User(Long id, String uid, String firstName, String lastName, String email, boolean isEmailVerified, String birthDate, String photoUrl, Date createdAt, Date updatedAt, List<Role> roles) {
		this.id = id;
		this.uid = uid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.isEmailVerified = isEmailVerified;
		this.birthDate = birthDate;
		this.photoUrl = photoUrl;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.roles = roles;
	}

	public static long getSerialVersionUID() {
		return serialVersionUID;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isEmailVerified() {
		return isEmailVerified;
	}

	public void setEmailVerified(boolean emailVerified) {
		isEmailVerified = emailVerified;
	}

	public String getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
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

	public List<Role> getRole() {
		return roles;
	}

	public void setRole(List<Role> role) {
		this.roles = role;
	}

	public void addRole(Role role){
		this.roles.add(role);
	}
}

