package com.ufpb.remais.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name="images")
public class Image {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private Long id;
	
	@Column(name="image_id")
	private String image_id;
	
	@Column(name="type")
	private String type;
	
	@Column(name="thumb_url")
	private String thumb_url;
	
	@Column(name="created_at")
	private String created_at;
	
	@Column(name="permalink_url")
	private String permalink_url;
	
	@Column(name="url")
	private String url;
	
	public Image() {
		
	}
	
	
	public Image(String image_id, String type, String thumb_url, String created_at, String permalink_url, String url) {
		super();
		this.image_id = image_id;
		this.type = type;
		this.thumb_url = thumb_url;
		this.created_at = created_at;
		this.permalink_url = permalink_url;
		this.url = url;
	}
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getImage_id() {
		return image_id;
	}
	public void setImage_id(String image_id) {
		this.image_id = image_id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getThumb_url() {
		return thumb_url;
	}
	public void setThumb_url(String thumb_url) {
		this.thumb_url = thumb_url;
	}
	public String getCreated_at() {
		return created_at;
	}
	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
	public String getPermalink_url() {
		return permalink_url;
	}
	public void setPermalink_url(String permalink_url) {
		this.permalink_url = permalink_url;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((image_id == null) ? 0 : image_id.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Image other = (Image) obj;
		if (image_id == null) {
			if (other.image_id != null)
				return false;
		} else if (!image_id.equals(other.image_id))
			return false;
		return true;
	}

	
	
	
	
	

}
