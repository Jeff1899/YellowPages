package com.example.demo;

import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
	
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public void registerSvc(@RequestBody Map<String, String> map) {
		System.out.println(yellowPagesController.registerSvc(map));
	}
	
}
