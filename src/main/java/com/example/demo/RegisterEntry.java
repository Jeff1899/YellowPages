package com.example.demo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class RegisterEntry {
	
	private String providerURL;
	
	private Set<String> consumerURLs = new HashSet<String>();
	
	public RegisterEntry(String providerURL){
		this.providerURL = providerURL;
	}
	
	public void addConsumerURL(String url){
		this.consumerURLs.add(url);
	}
	
	

}
