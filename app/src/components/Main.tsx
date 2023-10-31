
import { Box, Text, Flex, HStack, Image, Input, VStack } from "@chakra-ui/react";

import React, { FC, ReactNode, useMemo } from 'react';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
//import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { clusterApiUrl } from '@solana/web3.js';


const Main: React.FC = () => {
    return (
        <>
            <Box
                mt='20px'
                display='inline-block'
                position='relative' w='1200px'
                h='800px'
                borderRadius="18px"
                background="rgba(0, 178, 255, 0.48)"
                boxShadow="53px 46px 41px 0px rgba(0, 0, 0, 0.25), 0px 0px 34px 10px rgba(0, 0, 0, 0.25) inset"
                backdropFilter="blur(15px)">
                <Flex justifyContent='center'>
                    <Box
                        mt='20px'
                        w='933px'
                        h='70px'
                        borderRadius="18px"
                        background="var(--Azul-base, rgba(0, 133, 255, 0.35))"
                        boxShadow="40px 28px 29px 0px rgba(0, 0, 0, 0.25), 0px 0px 34px 10px rgba(0, 0, 0, 0.25) inset"
                        backdropFilter="blur(15px)">

                        <HStack display='flex' alignItems='center' justifyContent='space-around' mt='10px'>
                            <Box
                                w='172px'
                                h='48px'
                                borderRadius='91px'
                                bg='var(--AZUL-PRIM, linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%))'
                                boxShadow='15px 13px 34px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
                            >
                                <Flex justifyContent='space-evenly'>
                                    <Image src="gift.png" w='46px'></Image>
                                    <Text
                                        mt='13px'
                                        color="#FFF"
                                        textShadow="0px 2.844444513320923px 2.844444513320923px rgba(0, 0, 0, 0.25)"

                                        fontSize="16px"
                                        fontStyle="normal"
                                        fontWeight="500"
                                        lineHeight="normal"> Daily Bonnus</Text>
                                </Flex>
                            </Box>
                            <Input
                                color='#fff'
                                focusBorderColor='#fff'
                                placeholder='Search for games'
                                w='324px'
                                h='48px'
                                borderRadius='91px'
                                bg='var(--AZUL-PRIM, linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%))'
                                boxShadow='15px 13px 34px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
                            >
                            </Input>
                            <Box
                                w='172px'
                                h='48px'
                                borderRadius='91px'
                                bg='var(--AZUL-PRIM, linear-gradient(91deg, #0094FF 0.14%, #0059DF 99.5%))'
                                boxShadow='15px 13px 34px 0px rgba(0, 0, 0, 0.25), 0px -4px 4px 0px rgba(0, 0, 0, 0.25) inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
                            >

                                


                            </Box>
                        </HStack>

                    </Box>

                </Flex >
                <Box ml='134px' mt='100px'>
                    <Flex>
                        <Image src="image2.png" w='589px' position='absolute'></Image>
                        <Box
                            ml='296px'
                            position='relative'
                            w='637px'
                            h='382px'
                            borderRadius='18px'
                            bg='linear-gradient(90deg, rgba(0, 255, 240, 0.29) 0%, #001AFF 46.47%, #00F0FF 100%)'>

                        </Box>

                        <Image src="personagem.png" alignSelf='flex-end' position='absolute' ml='100px' />

                        <Flex position='absolute' mt='100px' ml='560px'>
                            <Image src="dice.png"></Image>
                            <VStack display='inline-block' mt='42px' ml='10px'>
                                <Text color="#000"
                                    fontFamily="Antonio"
                                    fontSize="22px"
                                    fontStyle="normal"
                                    fontWeight="400"
                                    lineHeight="normal">DICE ROYALE</Text>
                                <Text
                                    color="#000"
                                    textShadow="0px 2.844444513320923px 2.844444513320923px rgba(0, 0, 0, 0.25)"

                                    fontSize="14px"
                                    fontStyle="normal"
                                    fontWeight="500"
                                    lineHeight="normal">Play Game</Text>
                            </VStack>
                        </Flex>
                    </Flex>



                </Box>
            </Box >



        </>

    );
};

export default Main;