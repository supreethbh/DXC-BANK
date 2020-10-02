package com.dxc.dxcbank.service;

import java.util.List;
import java.util.Optional;

import com.dxc.dxcbank.entities.CustomerStatement;
import com.dxc.dxcbank.entities.MoneyTransfer;

public interface IMoneyTransferService {

	MoneyTransfer updateAccountBalance(MoneyTransfer moneyTransfer);

	Optional<MoneyTransfer> getAccountBalance(Long accountNumber);

	List<CustomerStatement> getTransactionDetails();

	CustomerStatement addTransactionDetails(CustomerStatement customerStatement);

}
