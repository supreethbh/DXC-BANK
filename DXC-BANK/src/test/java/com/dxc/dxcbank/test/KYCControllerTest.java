package com.dxc.dxcbank.test;

import static org.junit.jupiter.api.Assertions.*;




import org.junit.jupiter.api.Test;



import static org.junit.Assert.assertNotNull;


import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.dxc.dxcbank.DxcBankApplication;
import com.dxc.dxcbank.entities.KYCDetails;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = DxcBankApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class KYCControllerTest {
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
	public void testAddKYCDetails() {
		KYCDetails detailsKYC = new KYCDetails();

		detailsKYC.setAadhaarNumber(123456789012L);
		detailsKYC.setCardPANNumber("ABCD231");
		detailsKYC.setContactNumber(9980769384L);
		detailsKYC.setCustomerName("Anitha");
		ResponseEntity<KYCDetails> postResponse = restTemplate.postForEntity(getRootUrl() + "kyc/addKYC", detailsKYC,
				KYCDetails.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdateKYCDetails() {

	}

}


