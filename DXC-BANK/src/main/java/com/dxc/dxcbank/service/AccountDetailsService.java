package com.dxc.dxcbank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxc.dxcbank.entities.BenificiaryAccountDetails;
import com.dxc.dxcbank.repository.IAccountDetailsRepository;

@Service
public class AccountDetailsService implements IAccountDetailService {

    @Autowired 
    IAccountDetailsRepository accountRepository;    
    
    @Override
    public BenificiaryAccountDetails addDetails(BenificiaryAccountDetails benificiaryAccountDetails) {
	return accountRepository.save(benificiaryAccountDetails);
    }

    @Override
    public BenificiaryAccountDetails updateDetails(BenificiaryAccountDetails benificiaryAccountDetails) {
	return accountRepository.save(benificiaryAccountDetails);
    }

}
