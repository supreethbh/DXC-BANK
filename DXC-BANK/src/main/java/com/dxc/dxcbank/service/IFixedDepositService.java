package com.dxc.dxcbank.service;

import java.util.List;

import com.dxc.dxcbank.entities.FixedDepositAccount;
import com.dxc.dxcbank.entities.SavingsAccount;

public interface IFixedDepositService {

    FixedDepositAccount depositAmount(FixedDepositAccount fixedDeposit);

    FixedDepositAccount witdrawAmount(FixedDepositAccount fixedDeposit);

	List<FixedDepositAccount> getAllSavings();
}
