
use anchor_lang::{
    prelude::*,
    solana_program::{clock::Clock},
};

//use std::convert::TryInto;          //Para converter a Data e Hora //Não Funciona no Solana Playground

//imports internos
pub mod states;

use crate::{states::*};

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("6sfH6E3KhVvUKwYrFNzQ6QoGpjuqD6wt4uipcdMjq91g");

#[program]
pub mod betcontract {
    
    use super::*;

    pub fn reg_mov(ctx: Context<InitBetAccount>,
                                site: String,
                                tipo_mov: String,
                                game_play: String,
                                my_guess: u64,           
                                res_vrf: u64,            
                                extra_ps: String,           
                            )-> Result<()>
    {
        msg!("Record Movements");                                              //É louco mas a ordem de ondem estão a mensagens faz diferença
        msg!("Site: {}!", site);    
        msg!("Type Mov: {}!", tipo_mov);
        msg!("Game: {}!", game_play);
        msg!("Guess: {}!", my_guess);
        msg!("VRF: {}!", res_vrf);
        msg!("PS: {}!", extra_ps);

        let bet_site = &mut ctx.accounts.bet_site;

        bet_site.owner = ctx.accounts.owner.key();

        // Getting clock directly
        let clock = Clock::get()?;

        // Getting timestamp
        let play_timestamp = clock.unix_timestamp;

        bet_site.site = site;
        bet_site.tipo_mov = tipo_mov;
        bet_site.game_play = game_play;
        bet_site.my_guess = my_guess;
        bet_site.res_vrf = res_vrf;
        bet_site.extra_ps = extra_ps;
        bet_site.play_timestamp = play_timestamp;

        bet_site.play_timestampstr = play_timestamp.to_string(); //Passando para um campo String e usar como Seed
        //let parte_da_string:String = &play_timestampstr[5..10];  //Pegando somente os 6 números da direita 

        msg!("Timestamp: {}!",play_timestamp);

        Ok(())                            
    }

    pub fn close (_ctx: Context<Close>)-> Result<()>{
        Ok(())
    }
                                 
}

#[derive(Accounts)]
#[instruction(site: String, play_timestampstr: String)]
pub struct InitBetAccount<'info> {
    // We must specify the space in order to initialize an account.
    // First 8 bytes are default account discriminator,
    // next 8 bytes come from NewAccount.data being type u64.
    // (u64 = 64 bits unsigned integer = 8 bytes)
    #[account(
        init,
        //seeds = [site.as_bytes(), owner.key().as_ref(), &[play_timestampstr as u8].as_ref()],
        seeds = [site.as_bytes(), owner.key().as_ref()],                                        //Preciso de uma forma melhor de Seed
        bump,
        payer = owner, 
        space = 8 + 32 + 120 + 30 + 40 + 8 + 8 + 4 + 2048 + 20
        )]
    pub bet_site: Account<'info, BetAccountState>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Close<'info> {
    #[account(
        mut,
        close = owner,
        has_one = owner,
        )]
    pub bet_site: Account<'info, BetAccountState>,
    #[account(mut)]
    owner: Signer<'info>,
}

