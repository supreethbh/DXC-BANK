package com.dxc.dxcbank.test;

import static org.junit.Assert.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import com.dxc.dxcbank.DxcBankApplication;
import com.dxc.dxcbank.entities.Registration;

	@RunWith(SpringRunner.class)
	@SpringBootTest(classes = DxcBankApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

	class RegistrationServiceTest {

		@Autowired
		private TestRestTemplate restTemplate;

		@LocalServerPort
		private int port;

		private String getRootUrl() {
			return "http://localhost:" + port + "/register";
		}

		@Test
		public void contextLoads() {

		}

		@Test
		void testCustomerRegistration() {
			Registration register = new Registration();

			register.setState("Karnataka");
			register.setAccountType("Savings Account");
			register.setAddressLine1("ABcdejjkhh");
			register.setAddressLine2("afhjjkk");
			register.setCity("Banglore");
			register.setContactNumber(1234567890L);
			register.setLastName("Gowda");
			register.setCustomerId(12345667L);
			register.setGender("Girl");
			register.setMiddleName("A B");
			register.setFirstName("Adhya");
			register.setEmail("abc@gmail.com");
			register.setNation("India");
			register.setOccupation("abhhkg");

			ResponseEntity<Registration> postResponse = restTemplate.postForEntity(getRootUrl() + "/register", register,
					Registration.class);
			assertNotNull(postResponse);
			assertNotNull(postResponse.getBody());

		}

	}

