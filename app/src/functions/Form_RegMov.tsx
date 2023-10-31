
import { FC } from 'react'
import { useState } from 'react'

import { 
    Box, Button, 
    FormControl, 
    FormLabel, Input, 
    NumberDecrementStepper, 
    NumberIncrementStepper, 
    NumberInput, NumberInputField, 
    NumberInputStepper, 
    Textarea 
} from '@chakra-ui/react'

import * as web3 from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

import { RegMov } from '../models/RegMov'

const REG_MOVES_PROGRAM_ID = 'HQSMRqCawHDFZyLSMvhqgu1wRscXRchykSbX9EgEb2TP'

export const Form_RegMov: FC = () => {
    
    //Campos RegMov
    const [site, setSite] = useState('')
    const [tipo_mov, setTipo_mov] = useState('')
    const [game_play, setGame_play] = useState('')
    const [my_guess, setMy_guess] = useState(0)
    const [res_vrf, setRes_vrf] = useState(0)
    const [extra_ps, setExtra_ps] = useState('')

    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const handleSubmit = (event: any) => {
        
        event.preventDefault()
        
        const regmov = new RegMov(site, tipo_mov, game_play, my_guess, res_vrf, extra_ps)
        
        handleTransactionSubmit_Moves(regmov)
    }

    
    //REG MOVE
    const handleTransactionSubmit_Moves = async (regmov: RegMov) => {
        
        if (!publicKey) {
            alert('Please connect your wallet!')
            return
        }

        const buffer = regmov.serialize()
        
        const transaction = new web3.Transaction()

        const a = new web3.PublicKey(REG_MOVES_PROGRAM_ID)

        console.log(a.toString())

        //const [pda] = await web3.PublicKey.findProgramAddress( - Esse Metodos está Deprecated
        const [pda] = web3.PublicKey.findProgramAddressSync(  
            [publicKey.toBuffer(), new TextEncoder().encode(regmov.site)],
            new web3.PublicKey(REG_MOVES_PROGRAM_ID)
        )

        const instruction = new web3.TransactionInstruction({
            keys: [
                {
                    pubkey: publicKey,
                    isSigner: true,
                    isWritable: false,
                },
                {
                    pubkey: pda,
                    isSigner: false,
                    isWritable: true
                },
                {
                    pubkey: web3.SystemProgram.programId,
                    isSigner: false,
                    isWritable: false
                }
            ],
            data: buffer,
            programId: new web3.PublicKey(REG_MOVES_PROGRAM_ID)
        })

        transaction.add(instruction)

        try {
            let txid = await sendTransaction(transaction, connection)
            alert(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
            console.log(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
        } catch (e) {
            console.log(JSON.stringify(e))
            alert(JSON.stringify(e))
        }
    }

    return (
        
        <Box
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            borderWidth={1}
            margin={2}
            justifyContent="center"
        >
            <form onSubmit={handleSubmit}>
                
                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        Site
                        </FormLabel>
                    <Input 
                    id='title' 
                    color='gray.400'
                    onChange={event => setSite(event.currentTarget.value)}
                />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        Tipo Movimento
                        </FormLabel>
                    <Input 
                    id='Tipo_mov' 
                    color='gray.400'
                    onChange={event => setTipo_mov(event.currentTarget.value)}
                />
                </FormControl>    

                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        Game Play
                        </FormLabel>
                    <Input 
                    id='Game_play' 
                    color='gray.400'
                    onChange={event => setGame_play(event.currentTarget.value)}
                />
                </FormControl>
               
                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        My Guess
                        </FormLabel>
                    <Input 
                    id='My_guess' 
                    color='gray.400'
                    onChange={event => setMy_guess(parseInt(event.currentTarget.value))}
                />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        VRF
                        </FormLabel>
                    <Input 
                    id='Res_vrf' 
                    color='gray.400'
                    onChange={event => setRes_vrf(parseInt(event.currentTarget.value))}
                />
                </FormControl>

                

                <FormControl isRequired>
                    <FormLabel color='gray.200'>
                        Observações
                        </FormLabel>
                    <Textarea 
                        id='Extra_ps' 
                        color='gray.400'
                        onChange={event => setExtra_ps(event.currentTarget.value)}
                    />
                </FormControl>

                
                <Button width="full" mt={4} type="submit">
                    Submit Registro
                </Button>

            </form>
        </Box>
    );
}