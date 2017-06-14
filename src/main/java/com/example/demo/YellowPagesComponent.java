package com.example.demo;

import java.util.HashMap;
import java.util.Map;

public class YellowPagesComponent {
	
	 public static final String SERVICE_URL =  "serviceURL";
	 public static final String OFFERS =  "offers";
	 public static final String REQUIRE =  "require";
	
	Map<String,RegisterEntry> serviceRegister = new HashMap<>();
	    
    public String registerSvc(Map<String, String> map){
    	System.out.println("REGISTER-SIZE" + serviceRegister.size());
    	// Prüfe übergebene Map auf notwendige einträge
    	if(!(map.containsKey(SERVICE_URL) && (map.containsKey(OFFERS) ^ map.containsKey(REQUIRE)))){
    		return "FAILURE: illegel JSON-Format";
    	}
    	
    	//TODO prüfen ob angegeben URL vorhanden ist (GET zum anbieter)
    	// Angebot von Daten
    	if(map.containsKey(OFFERS)){
    		
    		if(!serviceRegister.containsKey(map.get(OFFERS))){
    			
    			serviceRegister.put(map.get(OFFERS), new RegisterEntry(map.get(SERVICE_URL)));
    			return "SUCCESS: Angebot von Daten wurde registriert";
    		}
    		else{
    			// Entweder darf im YellowpageService nur ein Offer mit selben Name Angeboten werden oder pro URL nur ein offer mit selben Namen
    			// Aktuell wird generell nur ein Offer mit selben Namen zugelassen
    			return "FAILURE: Offer wird bereits angeboten";
    		}
    	}
    	// Anfrage von Daten
    	else{
    		if(serviceRegister.containsKey(map.get(REQUIRE))){
    			serviceRegister.get(map.get(REQUIRE)).addConsumerURL(map.get(SERVICE_URL));
    			return "SUCCESS: Anfrage von Daten wurde registriert";
    		}
    		else{
    			return "FAILURE: Angebot ist nicht vorhanden!";
    		}
    	}
    	
    }

}
