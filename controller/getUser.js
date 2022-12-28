const user=require('../data.json');


module.exports.randomUser=(req,res)=>{
    const values = Object.values(user)
    const randomValue = values[parseInt(Math.random() * values.length)]
    res.send(randomValue)
}

module.exports.allUser=(req,res)=>{
    const {s} =req.query;
    const result=user.slice(0,s);
    res.send(result)
}
