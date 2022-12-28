const user=require('../data.json');


module.exports.randomUser=(req,res)=>{
    const values = Object.values(user)
    const randomValue = values[parseInt(Math.random() * values.length)]
    res.send(randomValue)
}