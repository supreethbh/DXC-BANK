package com.dxc.dxcbank.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CustomerStatement {

	   @Id
	    private long accountNumber;
	    private String accountHolderName;
	    private double amount;
	    private String TransactionType;
		public long getAccountNumber() {
			return accountNumber;
		}
		public void setAccountNumber(long accountNumber) {
			this.accountNumber = accountNumber;
		}
		public String getAccountHolderName() {
			return accountHolderName;
		}
		public void setAccountHolderName(String accountHolderName) {
			this.accountHolderName = accountHolderName;
		}
		public double getAmount() {
			return amount;
		}
		public void setAmount(double amount) {
			this.amount = amount;
		}
		public String getTransactionType() {
			return TransactionType;
		}
		public void setTransactionType(String transactionType) {
			TransactionType = transactionType;
		}
	    
}
