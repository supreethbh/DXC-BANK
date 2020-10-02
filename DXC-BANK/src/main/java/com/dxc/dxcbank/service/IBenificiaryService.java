package com.dxc.dxcbank.service;

import java.util.List;

import com.dxc.dxcbank.entities.BenificiaryAccountDetails;

public interface IBenificiaryService {

    BenificiaryAccountDetails addBenificiaryDetails(BenificiaryAccountDetails benificiaryAccountDetails);

    BenificiaryAccountDetails updateBenificiaryDetails(BenificiaryAccountDetails benificiaryAccountDetails);

	List<BenificiaryAccountDetails> getAllBenificiary();
}
