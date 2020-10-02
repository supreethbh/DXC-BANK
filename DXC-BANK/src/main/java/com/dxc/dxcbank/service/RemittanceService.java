package com.dxc.dxcbank.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dxc.dxcbank.entities.RemittanceManagement;
import com.dxc.dxcbank.exception.ServiceProviderNotFoundException;
import com.dxc.dxcbank.repository.IRemittanceRepository;

@Service
public class RemittanceService implements IRemittanceService {

	@Autowired
	IRemittanceRepository remittanceRepository;
	@Override
	public RemittanceManagement addUtility(RemittanceManagement remittanceManagement) {
		// TODO Auto-generated method stub
		return remittanceRepository.save(remittanceManagement);
	}

	@Override
	public List<RemittanceManagement> getAllUtility() {
		// TODO Auto-generated method stub
		return remittanceRepository.findAll();
	}

	 @Override
	    public ResponseEntity<RemittanceManagement> deleteUtility(long remittanceId) {
		 RemittanceManagement existingserviceProviders = this.remittanceRepository.findById(remittanceId)
			.orElseThrow(() -> new ServiceProviderNotFoundException(remittanceId));
		this.remittanceRepository.delete(existingserviceProviders);
		return ResponseEntity.ok().build();
	    }

}
