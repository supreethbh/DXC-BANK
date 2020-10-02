package com.dxc.dxcbank.entities;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Transaction implements Serializable {

    private static final long serialVersionUID = 1L;

    

    @Id
    private long accountNumber;
    private String codeIFSC;
    private double amount;
    private String benificiaryName;
    private String accountHolderName;
    private String transactionType;
    

    public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public Transaction() {
	super();
    }

    /**
     * @return the benificiaryName
     */
    public String getBenificiaryName() {
	return benificiaryName;
    }

    /**
     * @return the accountNumber
     */
    public long getAccountNumber() {
	return accountNumber;
    }

    /**
     * @return the codeIFSC
     */
    public String getCodeIFSC() {
	return codeIFSC;
    }

    /**
     * @return the amount
     */
    public double getAmount() {
	return amount;
    }

    /**
     * @param benificiaryName the benificiaryName to set
     */
    public void setBenificiaryName(String benificiaryName) {
	this.benificiaryName = benificiaryName;
    }

    /**
     * @param accountNumber the accountNumber to set
     */
    public void setAccountNumber(long accountNumber) {
	this.accountNumber = accountNumber;
    }

    /**
     * @param codeIFSC the codeIFSC to set
     */
    public void setCodeIFSC(String codeIFSC) {
	this.codeIFSC = codeIFSC;
    }

    /**
     * @param amount the amount to set
     */
    public void setAmount(double amount) {
	this.amount = amount;
    }

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

}
