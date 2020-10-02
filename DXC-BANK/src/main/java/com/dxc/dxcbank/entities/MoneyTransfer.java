package com.dxc.dxcbank.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class MoneyTransfer implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	private long accountNumber;
	private double accountBalance;
	private String accountHolderName;

	public long getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}

	public double getAccountBalance() {
		return accountBalance;
	}

	public void setAccountBalance(double accountBalance) {
		this.accountBalance = accountBalance;
	}

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

}
