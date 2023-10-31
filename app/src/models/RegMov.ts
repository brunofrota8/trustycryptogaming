

import * as borsh from '@project-serum/borsh'

import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

//import { Buffer } from 'buffer'; //Leia Abaixo   
//Precisa istalar e congigurar o Webpack
/*
https://viglucci.io/articles/how-to-polyfill-buffer-with-webpack-5
npm install buffer
npm install -D buffer
// webpack.config.js
module.exports = {
  // outras configurações
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/")
    }
  }
};
*/

export class RegMov {
    site: string;
    tipo_mov: string;
    game_play: string;
    my_guess: number;
    res_vrf: number;
    extra_ps: string;

    constructor(
        site: string, 
        tipo_mov: string, 
        game_play: string, 
        my_guess: number,
        res_vrf: number,
        extra_ps: string
    ) {
        this.site = site;
        this.tipo_mov = tipo_mov;
        this.game_play = game_play;
        this.my_guess = my_guess;
        this.res_vrf = res_vrf;
        this.extra_ps = extra_ps;    
    }

    borshInstructionSchema = borsh.struct([
        borsh.u8('variant'),
        borsh.str('site'),
        borsh.str('tipo_mov'),
        borsh.str('game_play'),
        borsh.u128('my_guess'),
        borsh.u128('res_vrf'),
        borsh.str('extra_ps'),
    ])

    serialize(): Buffer {
        const buffer = Buffer.alloc(1000)
        this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer)
        return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer))
    }
}