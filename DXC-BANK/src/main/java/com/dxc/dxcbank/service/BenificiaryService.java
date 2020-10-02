package com.dxc.dxcbank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxc.dxcbank.entities.BenificiaryAccountDetails;
import com.dxc.dxcbank.repository.IBenificiaryDetailsRepository;

@Service
public class BenificiaryService implements IBenificiaryService {

    @Autowired
    IBenificiaryDetailsRepository benificiaryRepository;

    @Override
    public BenificiaryAccountDetails addBenificiaryDetails(BenificiaryAccountDetails benificiaryAccountDetails) {
	return benificiaryRepository.save(benificiaryAccountDetails);
    }

    @Override
    public BenificiaryAccountDetails updateBenificiaryDetails(BenificiaryAccountDetails benificiaryAccountDetails) {
	return benificiaryRepository.save(benificiaryAccountDetails);
    }

	@Override
	public List<BenificiaryAccountDetails> getAllBenificiary() {
		// TODO Auto-generated method stub
		return benificiaryRepository.findAll();
	}

}
