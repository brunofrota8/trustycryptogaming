
use anchor_lang::prelude::*;

#[account]
pub struct BetAccountState {
    pub owner: Pubkey,           //32
    pub site: String,            //120
    pub tipo_mov: String,        //30
    pub game_play: String,       //40
    pub my_guess: u64,           //8
    pub res_vrf: u64,            //8
    pub extra_ps: String,        //4 + 2048
    pub play_timestamp: i64,    //8
    pub play_timestampstr: String      //20

    //8 + 32 + 120 + 30 + 40 + 8 + 8 + 4 + 2048 + 20          
}