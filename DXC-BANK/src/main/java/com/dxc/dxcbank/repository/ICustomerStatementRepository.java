package com.dxc.dxcbank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dxc.dxcbank.entities.CustomerStatement;

public interface ICustomerStatementRepository extends JpaRepository<CustomerStatement, Long> {

}
