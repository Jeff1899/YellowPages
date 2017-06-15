package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.YellowPagesComponent.RequiredData;
import com.google.gson.Gson;

@RestController
public class HomeController {
	

	private YellowPagesComponent yellowPagesController = new YellowPagesComponent();
	
//	{
//		"serviceURL":"www.iot.de",
//		"offers":"sensordata"
//	}
	
//	{
//	"serviceURL":"www.iot.de",
//	"require":"sensordata"
//}
	
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	public void registerSvc(@RequestBody String json) {
		Gson gson = new Gson();
		RegisterEntry registerEntry = gson.fromJson(json, RegisterEntry.class);
		System.out.println(yellowPagesController.registerSvc(registerEntry));
	}
    
    public class RegisterEntry{
    	String serviceURL;
    	List<String> providedData;
    	List<RequiredData> requieredDatas;
    }
    
    public class RequiredData{
    	String url;
    	String data;
    }
	
}
