const user=require('../data.json');


module.exports.randomUser=(req,res)=>{
    const values = Object.values(user)
    const randomValue = values[parseInt(Math.random() * values.length)]
    res.send(randomValue)
}

module.exports.allUser=(req,res)=>{
    const {s}=req.query;
    if(user.length===Number(s)){
        console.log(user);
    }
    res.send('database')
}
