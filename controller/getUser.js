let user=require('../data.json');


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
module.exports.postUser=(req,res)=>{
    const data=req.body;
    user.push(data);
    console.log(user);
    
    res.send('post method');
  
}
