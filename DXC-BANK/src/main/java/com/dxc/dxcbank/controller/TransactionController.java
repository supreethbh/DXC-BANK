package com.dxc.dxcbank.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.dxcbank.entities.BenificiaryAccountDetails;
import com.dxc.dxcbank.entities.ServiceProviders;
import com.dxc.dxcbank.entities.Transaction;
import com.dxc.dxcbank.entities.WifiBillPayment;
import com.dxc.dxcbank.exception.TransactionFailedException;
import com.dxc.dxcbank.service.IBenificiaryService;
import com.dxc.dxcbank.service.ITransactionService;
import com.dxc.dxcbank.service.IWifiBillService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path="/transaction")
public class TransactionController {

    @Autowired
    private ITransactionService transactionService;

    @Autowired
    IBenificiaryService benificiaryService;

    @Autowired
    IWifiBillService wifiBillService;

    @PostMapping(path = "/transactions", consumes = { "application/json" })
    public Transaction addTransaction(@RequestBody Transaction transaction) throws TransactionFailedException {
	return transactionService.addTransaction(transaction);
    }
    @GetMapping(path = "/getAllStatement", produces = { "application/json" })
    public List<Transaction> getAllTransaction() {
	return transactionService.getAllTransaction();
    }

    @PostMapping(path = "/addBenificiaryAccount", consumes = { "application/json" })
    public BenificiaryAccountDetails addBenificiaryDetails(@RequestBody BenificiaryAccountDetails account) {
	return benificiaryService.addBenificiaryDetails(account);
    }

    @PutMapping(path = "/updateBenificiaryAccount", consumes = { "application/json" })
    public BenificiaryAccountDetails updateBenificiaryDetails(@RequestBody BenificiaryAccountDetails account) {
	return benificiaryService.updateBenificiaryDetails(account);
    }

    @PostMapping(path = "/addwifibill", consumes = { "application/json" })
    public WifiBillPayment addBill(@RequestBody WifiBillPayment wifiBill) {
	return wifiBillService.addBill(wifiBill);
    }

}
