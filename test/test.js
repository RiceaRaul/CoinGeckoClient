let Geko = require("../index");

let geko = new Geko();


async function test(){
    let d = await geko.coins.markets({
        ids:['bitcoin'],
        vs_currency:"eur",

        market_cap_desc:"market_cap_desc"
    })
    
    console.log(d);
}

test();
