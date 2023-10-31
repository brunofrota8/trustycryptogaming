import React from 'react';
import { Box, Text, Flex, Link, HStack, Stack, Image, VStack } from "@chakra-ui/react";

const Header: React.FC = () => {
    return (
        <Box display='inline-block' mt='20px' w="388px" h="800px" flexShrink={0} borderRadius="18px" ml='90px'
            background="linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%)"
            boxShadow="40px 28px 29px 0px rgba(0, 0, 0, 0.25), 0px 0px 34px 10px rgba(0, 0, 0, 0.25) inset"
            backdropFilter="blur(15px)">

            <VStack spacing="20px">
                <Image w='180px' src="/logo.png" mt="5px" mb="9px" />

                <Box display="flex" flexDir="row" w="328px" h="59px" flexShrink={0} borderRadius="16px"
                    background="linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%)"
                    boxShadow="0px 4px 13px 0px rgba(0, 0, 0, 0.25) inset, 0px -4px 13px 0px rgba(0, 0, 0, 0.25) inset, 15px 20px 20px 0px rgba(0, 0, 0, 0.25)">
                    <Flex alignItems='center'>
                        <Image src="/image1.svg" w="70px" mt='12px' />
                        <Link
                            color="#222"
                            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"

                            fontSize="21px"
                            fontStyle="normal"
                            fontWeight="700"
                            lineHeight="normal">
                            Home Page
                        </Link>
                    </Flex>
                </Box>
                <Box display="flex" flexDir="row" w="328px" h="59px" flexShrink={0} borderRadius="16px"
                    background="linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%)"
                    boxShadow="0px 4px 13px 0px rgba(0, 0, 0, 0.25) inset, 0px -4px 13px 0px rgba(0, 0, 0, 0.25) inset, 15px 20px 20px 0px rgba(0, 0, 0, 0.25)">
                    <Flex alignItems='center'>
                        <Image src="/image1.svg" w="70px" mt='12px' />
                        <Link
                            color="#fff"
                            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"

                            fontSize="21px"
                            fontStyle="normal"
                            fontWeight="700"
                            lineHeight="normal">
                            Dice Royale
                        </Link>
                    </Flex>
                </Box>
                <Box display="flex" flexDir="row" w="328px" h="59px" flexShrink={0} borderRadius="16px"
                    background="linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%)"
                    boxShadow="0px 4px 13px 0px rgba(0, 0, 0, 0.25) inset, 0px -4px 13px 0px rgba(0, 0, 0, 0.25) inset, 15px 20px 20px 0px rgba(0, 0, 0, 0.25)">
                    <Flex alignItems='center'>
                        <Image src="/image1.svg" w="70px" mt='12px' />
                        <Link
                            color="#fff"
                            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"

                            fontSize="21px"
                            fontStyle="normal"
                            fontWeight="700"
                            lineHeight="normal">
                            Duck Poker
                        </Link>
                    </Flex>
                </Box>
                <Box display="flex" flexDir="row" w="328px" h="59px" flexShrink={0} borderRadius="16px"
                    background="linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%)"
                    boxShadow="0px 4px 13px 0px rgba(0, 0, 0, 0.25) inset, 0px -4px 13px 0px rgba(0, 0, 0, 0.25) inset, 15px 20px 20px 0px rgba(0, 0, 0, 0.25)">
                    <Flex alignItems='center'>
                        <Image src="/image1.svg" w="70px" mt='12px' />
                        <Link
                            color="#fff"
                            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"

                            fontSize="21px"
                            fontStyle="normal"
                            fontWeight="700"
                            lineHeight="normal">
                            Naval Battle
                        </Link>
                    </Flex>
                </Box>

                <HStack alignItems="center">
                    <Image src="foto-perfil.svg" mt='8px' />
                    <Text
                        fontFamily="secondary"
                        mr='70px'
                        color="#FFF"

                        fontSize="22px"
                        fontStyle='normal'
                        fontWeight="400"
                        lineHeight="normal"> El'Doido
                    </Text>

                    <Box
                        w="96px"
                        h="35px"
                        flexShrink={0}
                        borderRadius="44.089px"
                        bg="var(--AZUL-PRIM, linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%)"
                        boxShadow="0px 2.84444px 2.84444px 0px rgba(0, 0, 0, 0.25) inset, 0px -2.84444px 2.84444px 0px rgba(0, 0, 0, 0.25) inset, 10.66667px 14.22222px 14.22222px 0px rgba(0, 0, 0, 0.25)"
                    >
                        <HStack alignItems="center" mt='8px'>
                            <Image w='17px' src='exit.png' ml='8px' />
                            <Text
                                color="#FFF"
                                textShadow="0px 2.844444513320923px 2.844444513320923px rgba(0, 0, 0, 0.25)"

                                fontSize="16px"
                                fontStyle="normal"
                                fontWeight='700'
                                lineHeight='normal'>Go out
                            </Text>
                        </HStack>
                    </Box>
                </HStack>

                <Box
                    w="328px"
                    h="177px"
                    borderRadius="16px"
                    background="linear-gradient(109deg, #0094FF 31.7%, rgba(0, 148, 255, 0.45) 61.39%)"
                    boxShadow="0px 8px 11px 0px rgba(0, 0, 0, 0.25) inset, 15px 20px 20px 0px rgba(0, 0, 0, 0.25)"
                    display="flex"
                    alignItems="flex-end"
                    position="relative"
                >
                    <VStack ml='10px' display="flex" alignItems="flex-start" my='auto' color="#FFF"
                        textShadow="0px 2.844444513320923px 2.844444513320923px rgba(0, 0, 0, 0.25)"

                        fontSize="17px"
                        fontStyle="normal"
                        fontWeight="700"
                        lineHeight="normal">
                        <Link>My Profile</Link>
                        <Link>Balance</Link>
                        <Link>Notification</Link>
                    </VStack>
                    <Image
                        ml='110px'
                        src="/mario.png"
                        alt="Mario"
                        position="absolute"
                    />
                </Box>
            </VStack>
            <Flex alignItems='center' justifyContent='center' mt='15px'>
                <HStack color="#FFF"
                    textShadow="0px 2.844444513320923px 2.844444513320923px rgba(0, 0, 0, 0.25)"

                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="normal"
                    spacing='13px'>
                    <Link>About us</Link>
                    <Link>Payments</Link>
                    <Link>Policy</Link>
                    <Link>Terms</Link>
                </HStack>
            </Flex>
            <Flex alignItems='center' justifyContent='center' mt='10px'>
                <Text color="#FFF"
                    fontFamily="Antonio"
                    fontSize="15px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal">© 2023 Trusty Crypto Gaming. All Rights Reserved.
                </Text>
            </Flex>
        </Box>
    );
};

export default Header;
