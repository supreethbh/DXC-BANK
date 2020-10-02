package com.dxc.dxcbank.service;

import com.dxc.dxcbank.entities.BenificiaryAccountDetails;

public interface IAccountDetailService {

    BenificiaryAccountDetails addDetails(BenificiaryAccountDetails benificiaryAccountDetails);
    BenificiaryAccountDetails updateDetails(BenificiaryAccountDetails benificiaryAccountDetails);
}
