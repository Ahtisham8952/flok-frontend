import {
    Box,
    Text,
    Img,
    Flex,
    Divider,
    Heading,
    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Radio,
    Checkbox,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
import QuantitySelector from "./quantitySelector";
import LayoutWrapper from "../../../core/LayoutWrapper/LayoutWrapper";

  
  const GuestCheckOut = () => {
    return (
      <>
      <LayoutWrapper>

      
        <Box>
          <Box>
            <Img src="/checkoutbanner.png" alt="PurchaseBanner" />
          </Box>
          <Box
            maxW="1920px"
            width="100%"
            margin="auto"
            mt="20px"
            px={{ base: "30px", md: "50px", lg: "100px" }}
          >
            <Flex
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              pt="20px"
            >
              <Box>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Event title
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Date: Time
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Location: Lorem Ipsum
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Price $$$
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Capacity 23/30
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Restrictions: Ages 7-12
                </Text>
              </Box>
  
              <Box textAlign={{ base: "", md: "", lg: "center" }}>
                <QuantitySelector />
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                  mt="50px"
                >
                  Tickets 100 Each
                </Text>
              </Box>
            </Flex>
            <Divider
              borderBottom="2px"
              fontWeight="bold"
              pt="65px"
              color="#DAD9D9"
            />
            <Flex
              justifyContent="space-between"
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              pt="20px"
            >
              <Box>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Event title
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Date: Time
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Location: Lorem Ipsum
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Price $$$
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Capacity 23/30
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                >
                  Restrictions: Ages 7-12
                </Text>
              </Box>
  
              <Box textAlign={{ base: "", md: "", lg: "center" }}>
                <QuantitySelector />
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                  mt="50px"
                >
                  Tickets 100 Each
                </Text>
              </Box>
            </Flex>
            <Divider
              borderBottom="2px"
              fontWeight="bold"
              pt="65px"
              color="#DAD9D9"
            />
            <Box>
              <Flex
                justifyContent="space-between"
                backgroundColor="white"
                px="40px"
              >
                <Box>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="50px"
                  >
                    1x Event Name
                  </Text>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    1x Event Name
                  </Text>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    Subtotal
                  </Text>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    Fees
                  </Text>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    Total
                  </Text>
                </Box>
  
                <Box>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="50px"
                  >
                    $100
                  </Text>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    $100
                  </Text>
  
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    $200
                  </Text>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    $10
                  </Text>
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                    fontWeight="700"
                    lineHeight="35px"
                    mt="20px"
                  >
                    $210
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Heading mt="50px" mb="50px">
              information
            </Heading>
            <Flex justifyContent="space-between" maxW="1200px" width="100%">
              <Box maxW="45%" width="100%">
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                  mt="20px"
                >
                  NAME
                </Text>
                <Input placeholder="" size="lg" />
              </Box>
              <Box maxW="45%" width="100%">
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                  fontWeight="700"
                  lineHeight="35px"
                  mt="20px"
                >
                  Email
                </Text>
                <Input placeholder="" size="lg" />
              </Box>
            </Flex>
            <Box maxW="45%" width="100%">
              <Text
                fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                fontWeight="700"
                lineHeight="35px"
                mt="50px"
              >
                Address
              </Text>
              <Input placeholder="" size="lg" />
            </Box>
            <Heading mt="50px" mb="50px">
              Payment Method
            </Heading>
            <Box>
              <Accordion maxW="800px">
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Radio value="radio1" marginRight="1rem" />
                        Credit Card
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={8}>
                    <Box maxW="45%" width="100%">
                      <Text
                        fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                        fontWeight="700"
                        lineHeight="35px"
                        mt="20px"
                      >
                        Name on card
                      </Text>
                      <Input placeholder="" size="lg" />
                    </Box>
                    <Flex justifyContent="space-between" maxW="1200px">
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          Card Number
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          Expration Date
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                    </Flex>
                    <Flex justifyContent="space-between" maxW="1200px">
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          Card Holder
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          CVC
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
  
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Radio value="radio2" marginRight="1rem" />
                        PayPal
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box maxW="45%" width="100%">
                      <Text
                        fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                        fontWeight="700"
                        lineHeight="35px"
                        mt="20px"
                      >
                        Name on card
                      </Text>
                      <Input placeholder="" size="lg" />
                    </Box>
                    <Flex justifyContent="space-between" maxW="1200px">
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          Card Number
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          Expration Date
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                    </Flex>
                    <Flex justifyContent="space-between" maxW="1200px">
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          Card Holder
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                      <Box maxW="45%" width="100%">
                        <Text
                          fontSize={{ base: "14px", md: "16px", lg: "20px" }}
                          fontWeight="700"
                          lineHeight="35px"
                          mt="20px"
                        >
                          CVC
                        </Text>
                        <Input placeholder="" size="lg" />
                      </Box>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Checkbox defaultChecked mt="30px">
                I agree with our terms and conditions and privacy policy.
              </Checkbox>
            </Box>
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "black", color: "white" }}
              fontSize={{ base: "14px", md: "16px", lg: "20px" }}
              width="500px"
              mt="50px"
              mb="500px"
            >
              Pay Now
            </Button>
          </Box>
        </Box>
        </LayoutWrapper>
      </>
    );
  };
  
  export default GuestCheckOut;
  