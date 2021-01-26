package br.com.delta.students;

import java.io.Serializable;

public class Dto implements Serializable {
	private static final long serialVersionUID = 1L;

	private String name;
	private String address;
	private String imageBase64;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getImageBase64() {
		return imageBase64;
	}
	public void setImageBase64(String imageBase64) {
		this.imageBase64 = imageBase64;
	}
}
