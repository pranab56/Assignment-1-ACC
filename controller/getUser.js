let user = require("../data.json");


module.exports.randomUser = (req, res) => {
  const values = Object.values(user);
  const randomValue = values[parseInt(Math.random() * values.length)];
  res.send(randomValue);
};


module.exports.allUser = (req, res) => {
  const { s } = req.query;
  const result = user.slice(0, s);
  res.send(result);
};


module.exports.postUser = (req, res) => {
  const data = req.body;
  if (
    !data.id ||
    !data.name ||
    !data.gender ||
    !data.contact ||
    !data.address ||
    !data.photoURL
  ) {
    return res.send("please validated the body");
  } else {
    user.push(data);
    return res.send(user);
  }
};


module.exports.UpdateUser = (req, res) => {
  const { id } = req.params;
  const { contact } = req.body;
  const updateUser = user.find((person) => person.id === Number(id));
  if (!updateUser) {
    return res.send("please valid id");
  } else {
    updateUser.contact = contact;
    return res.send(updateUser);
  }
};


module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const findId = user.find((p) => p.id == id);
  if (!findId) {
    return res.send("please vaild a id");
  }
  const deletePerson = user.filter((p) => p.id != id);
  res.send(deletePerson);
};
