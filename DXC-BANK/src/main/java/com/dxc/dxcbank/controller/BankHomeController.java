package com.dxc.dxcbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.dxcbank.entities.BenificiaryAccountDetails;
import com.dxc.dxcbank.entities.AdminResponsibility;
import com.dxc.dxcbank.entities.ReoccuringAccount;
import com.dxc.dxcbank.service.IAccountDetailService;
import com.dxc.dxcbank.service.IAdminService;
import com.dxc.dxcbank.service.IBenificiaryService;
import com.dxc.dxcbank.service.IReoccuringAccountService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/bank")
public class BankHomeController {

    @Autowired
    private IReoccuringAccountService reoccuringAccountService;

    @Autowired
    IAdminService adminService;

    @Autowired
    IBenificiaryService benificiaryService;

    @PostMapping(path = "/admin/add", consumes = { "application/json" })
    public AdminResponsibility addRequest(@RequestBody AdminResponsibility adminResponsibility) {
	return adminService.addRequest(adminResponsibility);
    }

    @PutMapping(path = "/admin/update", consumes = { "application/json" }, produces = { "application/json" })
    public AdminResponsibility updateRequest(@RequestBody AdminResponsibility adminResponsibility) {
	return adminService.updateRequest(adminResponsibility);
    }

    @DeleteMapping("/admin/delete/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable("id") int userId) {

	return adminService.deleteRequest(userId);
    }

    @PostMapping(path = "/reocurring", consumes = { "application/json" })
    public ReoccuringAccount addMoney(@RequestBody ReoccuringAccount reoccuringAccount) {
	return reoccuringAccountService.addAmount(reoccuringAccount);
    }
    @PostMapping(path = "/createAccount", consumes = { "application/json" })
    public BenificiaryAccountDetails createAccount(@RequestBody BenificiaryAccountDetails benificiaryAccountDetails) {
	return benificiaryService.addBenificiaryDetails(benificiaryAccountDetails);
    }

    @PostMapping(path = "/addAccount", consumes = { "application/json" })
    public BenificiaryAccountDetails addDetails(@RequestBody BenificiaryAccountDetails benificiaryAccountDetails) {
	return benificiaryService.addBenificiaryDetails(benificiaryAccountDetails);
    }

    @PutMapping(path = "/updateAccount", consumes = { "application/json" })
    public BenificiaryAccountDetails updateDetails(@RequestBody BenificiaryAccountDetails benificiaryAccountDetails) {
	return benificiaryService.updateBenificiaryDetails(benificiaryAccountDetails);
    }
    
    @GetMapping(path="/getBenificiaryDetails", produces={ "application/json" })
    public List<BenificiaryAccountDetails> getAccountDetails()
    {
    	return benificiaryService.getAllBenificiary();
    }

}
