package com.dxc.dxcbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.dxcbank.entities.RemittanceManagement;
import com.dxc.dxcbank.entities.ServiceProviders;
import com.dxc.dxcbank.service.IRemittanceService;
import com.dxc.dxcbank.service.IServiceProviderService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/utility")
public class RemittanceManagementController {

	  @Autowired
	    private IRemittanceService remittanceService;

	    @PostMapping(path = "/addUtilBill", consumes = { "application/json" })
	    public RemittanceManagement addUtility(@RequestBody RemittanceManagement remittanceManagement) {
		return remittanceService.addUtility(remittanceManagement);
	    }

	    @GetMapping(path = "/getUtilBill", produces = { "application/json" })
	    public List<RemittanceManagement> getAllUtility() {
		return remittanceService.getAllUtility();
	    }

	    @DeleteMapping(path = "/deleteUtilBill/{remittanceId}")
	    public ResponseEntity<?> deleteUtility(@PathVariable("remittanceId") long remittanceId) {
		return remittanceService.deleteUtility(remittanceId);
	    }
	    
	   
	    
}
