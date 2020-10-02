package com.dxc.dxcbank.test;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.dxc.dxcbank.DxcBankApplication;
import com.dxc.dxcbank.entities.FixedDepositAccount;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = DxcBankApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

class FixedDepositControllerTest {
	
	@Autowired
	private TestRestTemplate restTemplate;

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
		
		FixedDepositAccount fixed= new FixedDepositAccount();
	       
    	fixed.setDepositAmount(100000);
    	fixed.setPeriod("3");
    	fixed.setAccountHolderName("Javeed");
    	fixed.setAccountNumber(1234578890L);
    	fixed.setRateOfInterest(5);
        ResponseEntity<FixedDepositAccount> postResponse = restTemplate.postForEntity(getRootUrl() + "/fixed", fixed, FixedDepositAccount.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
		
	}

	@Test
	void testWitdrawAmount() {
		
	}

}

