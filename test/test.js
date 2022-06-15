let Geko = require("../index");

let geko = new Geko();


async function test(){
    let d = await geko.coins.ohlc({
        id:'bitcoin',
        vs_currency:"eur",
        from:"1392577232",
        to:"1422577232"
    })
    
    console.log(d);
}

test();
