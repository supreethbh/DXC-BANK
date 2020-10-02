package com.dxc.dxcbank.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxc.dxcbank.entities.CustomerStatement;
import com.dxc.dxcbank.entities.MoneyTransfer;
import com.dxc.dxcbank.repository.ICustomerStatementRepository;
import com.dxc.dxcbank.repository.IMoneyTransferRepository;

@Service
public class MoneyTransferService implements IMoneyTransferService {

	@Autowired
	IMoneyTransferRepository moneyTransferRepository;
    
	@Autowired
	ICustomerStatementRepository customerStatementRepository;
	
	@Override
	public MoneyTransfer updateAccountBalance(MoneyTransfer moneyTransfer) {
		// TODO Auto-generated method stub
		return moneyTransferRepository.save(moneyTransfer);
	}

	@Override
	public Optional<MoneyTransfer> getAccountBalance(Long accountNumber) {
		// TODO Auto-generated method stub
		return moneyTransferRepository.findById(accountNumber);
	}

	@Override
	public CustomerStatement addTransactionDetails(CustomerStatement customerStatement) {
		// TODO Auto-generated method stub
		return customerStatementRepository.save(customerStatement);
	}

	@Override
	public List<CustomerStatement> getTransactionDetails() {
		// TODO Auto-generated method stub
		return customerStatementRepository.findAll();
	}

	

}
