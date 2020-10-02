package com.dxc.dxcbank.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxc.dxcbank.entities.CustomerStatement;
import com.dxc.dxcbank.entities.MoneyTransfer;
import com.dxc.dxcbank.service.IMoneyTransferService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/moneyTransfer")
public class MoneyTransferController {

	@Autowired
	IMoneyTransferService moneyTransferService;

	@PutMapping(path = "/moneyDeposit", consumes = { "application/json" })
	public MoneyTransfer depositAmount(@RequestBody MoneyTransfer moneyTransfer) {
		return moneyTransferService.updateAccountBalance(moneyTransfer);
	}

	@PutMapping(path = "/moneyWithDraw", consumes = { "application/json" })
	public MoneyTransfer withDrawAmount(@RequestBody MoneyTransfer moneyTransfer) {
		return moneyTransferService.updateAccountBalance(moneyTransfer);
	}
	
	@GetMapping(path = "/getTransaction", produces = { "application/json" })
	public List<CustomerStatement> getTransactionDetails() {
		return moneyTransferService.getTransactionDetails();
	}

	@GetMapping(path = "/getAccountBalance/{accountNumber}", consumes = { "application/json" }, produces = { "application/json" })
	public Optional<MoneyTransfer> getAccountBalance(@PathVariable("accountNumber") Long accountNumber) {
		return moneyTransferService.getAccountBalance(accountNumber);
	}
	
	@PostMapping(path = "/addTransaction", consumes = { "application/json" })
	public CustomerStatement addTransactionDetails(@RequestBody CustomerStatement customerStatement) {
		return moneyTransferService.addTransactionDetails(customerStatement);
	}
}