let Geko = require("./lib/geko");
let geko = new Geko();
let d = geko.coins.markets({
    ids:['bitcoin'],
    vs_currency:"eur",
    market_cap_desc:"market_cap_desc"
}
).then((r)=>{
    console.log(r.data);
});
