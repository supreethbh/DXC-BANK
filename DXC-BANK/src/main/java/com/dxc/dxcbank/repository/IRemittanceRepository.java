package com.dxc.dxcbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dxc.dxcbank.entities.RemittanceManagement;

@Repository
public interface IRemittanceRepository extends JpaRepository<RemittanceManagement, Long> {

}
