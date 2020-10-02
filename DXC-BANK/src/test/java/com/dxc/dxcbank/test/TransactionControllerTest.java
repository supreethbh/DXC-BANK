package com.dxc.dxcbank.test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.dxc.dxcbank.DxcBankApplication;
import com.dxc.dxcbank.controller.TransactionController;
import com.dxc.dxcbank.entities.Transaction;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = DxcBankApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

class TransactionControllerTest {

	@Autowired
	private TestRestTemplate restTemplate;
	@Autowired
	TransactionController transaction;

	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}

	@Test
	public void contextLoads() {

	}

	@Test
	void testDepositAmount() {

		Transaction transs = new Transaction();

		transs.setBenificiaryName("Arpitha");
		transs.setAmount(50000);
		transs.setAccountNumber(12345665);
		transs.setCodeIFSC("3455ERTT");

		ResponseEntity<Transaction> postResponse = restTemplate.postForEntity(getRootUrl() + "/transactions", transs,
				Transaction.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());

	}

}
