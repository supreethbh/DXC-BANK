package com.dxc.dxcbank.service;

import java.util.List;

import org.springframework.http.ResponseEntity;
import com.dxc.dxcbank.entities.RemittanceManagement;


public interface IRemittanceService {

	RemittanceManagement addUtility(RemittanceManagement remittanceManagement);

	List<RemittanceManagement> getAllUtility();

	ResponseEntity<RemittanceManagement> deleteUtility(long serviceProviderID);

}
