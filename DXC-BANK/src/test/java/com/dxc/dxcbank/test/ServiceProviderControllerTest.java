package com.dxc.dxcbank.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.dxc.dxcbank.controller.ServiceProviderController;
import com.dxc.dxcbank.entities.ServiceProviders;
import com.dxc.dxcbank.repository.IServiceProviderRepository;
import com.dxc.dxcbank.service.IServiceProviderService;
import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(ServiceProviderController.class)

class ServiceProviderControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Autowired
	private ObjectMapper objectMapper;
	@MockBean
	private IServiceProviderService serviceProviderService;

	@MockBean
	private IServiceProviderRepository serviceRepo;

	@Test
	void testGetAllService() throws Exception {
		List<ServiceProviders> list = new ArrayList<>();

		list.add(new ServiceProviders(1, "Act", "BroadBand Connection"));
		list.add(new ServiceProviders(2, "AIRTEL", "BroadBand Connection"));
		list.add(new ServiceProviders(3, "APPEPDCL", "ELECTRICITY"));
		list.add(new ServiceProviders(4, "WATER", "WATER SERVICE"));

		Mockito.when(serviceProviderService.getAllService()).thenReturn(list);

		String url = "/service/getAllService";

		MvcResult mvcResult = mockMvc.perform(get(url)).andExpect(status().isOk()).andReturn();

		String actualJsonResponse = mvcResult.getResponse().getContentAsString();

		System.out.println(actualJsonResponse);

		String expectedJsonResponse = objectMapper.writeValueAsString(list);

		assertThat(actualJsonResponse).isEqualToIgnoringWhitespace(expectedJsonResponse);

	}

	@Test
	void testGetAllService1() throws Exception {

		List<ServiceProviders> list = new ArrayList<>();

		list.add(new ServiceProviders(1, null, null));
		list.add(new ServiceProviders(2, null, null));
		list.add(new ServiceProviders(3, null, null));
		list.add(new ServiceProviders(4, null, null));

		Mockito.when(serviceProviderService.getAllService()).thenReturn(list);

		String url = "/service/getAllService";

		MvcResult mvcResult = mockMvc.perform(get(url)).andExpect(status().isOk()).andReturn();

		String actualJsonResponse = mvcResult.getResponse().getContentAsString();

		System.out.println(actualJsonResponse);

		String expectedJsonResponse = objectMapper.writeValueAsString(list);

		assertThat(actualJsonResponse).isEqualToIgnoringWhitespace(expectedJsonResponse);

	}

//	@Test
//	void testDeleteServiceProvider() {
//		
//	}

}
